"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";                                                    
import { getCartItems } from "../action/action";
import { ChevronRight } from "lucide-react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zipCode: false,
    country: false,
    phone: false,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items || []);
    };
    fetchCartItems();

    const appliedDiscount = localStorage.getItem("applyDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const validateForm = () => {
    const errors =
    
    
    {
      firstName:!formValues.firstName,
      lastName:!formValues.lastName,
      email:formValues.email.includes('@'),
      phone:!formValues.phone,
      address:!formValues.address,
      zipCode:!formValues.zipCode,
      city:!formValues.city,
      country:!formValues.country,
      state:!formValues.state
    }
    setFormErrors(errors);
    return Object.values(errors).every((err) => !err);
  };

  const handlePlaceOrder = async () => {
    if (validateForm()) {
      Swal.fire({
        title: "Confirm Order",
        text: "Are you sure you want to place this order?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Place Order",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("applyDiscount");
          Swal.fire("Order Placed", "Your order has been successfully placed!", "success");
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center space-x-2 py-4">
          <Link href="/cart" className="text-black font-medium text-[16px]">
            Cart
          </Link>
          <ChevronRight className="text-gray-500 w-4 h-4" />
          <span className="font-medium text-[16px]">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-4">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage)?.url() || "/fallback-image.jpg"}
                        alt={item.productName}
                        width={60}
                        height={60}
                        className="object-cover rounded-md"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-sm">{item.productName}</h3>
                      <p className="text-xs text-gray-600">Qty: {item.inventory}</p>
                      <p className="font-medium text-sm">${item.price * item.inventory}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart.</p>
            )}
            <div className="mt-4 text-right">
              <p>Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span></p>
              <p>Discount: <span className="font-semibold">${discount.toFixed(2)}</span></p>
              <p className="text-lg font-bold">Total: ${(subtotal - discount).toFixed(2)}</p>
            </div>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(formValues).map((key) => (
                <div key={key} className={key === "address" ? "md:col-span-2" : ""}>
                  <label htmlFor={key} className="block font-medium text-sm">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    id={key}
                    name={key}
                    value={formValues[key as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${key}`}
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <p className="text-red-500 text-xs mt-1">{`${key.charAt(0).toUpperCase() + key.slice(1)} is required`}</p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
