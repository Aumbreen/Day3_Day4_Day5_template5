"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { getCartItems, removefromCart, updateCartquantity } from "../action/action";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      if (items) setCartItems(items);
    };
    fetchCartItems();
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#353638",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await removefromCart(id);
        const updatedCart = await getCartItems();
        setCartItems(updatedCart);

        Swal.fire("Success", "Item has been removed!","success");
      }
    });
  }; // ✅ 

  const handleQuantityChange = async (id: string, quantity: number) => {
    await updateCartquantity(id, quantity);
    setCartItems(await getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };
const router=useRouter();
  const handleProcceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed!",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#353638",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully placed!", "success");
        router.push("/Checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="w-full max-w-4xl">
        <nav className="flex items-center space-x-2 text-gray-600 mb-6">
          <Link href="/cart" className="text-black font-medium"> Shopping Cart</Link>
          <ChevronRight className="w-4 h-4 text-gray-500" />
          <span className="font-medium text-gray-700">Checkout</span>
          
        </nav>
      </div>

      {/* Cart Content */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                {item.productImage && (
                  <Image
                    src={urlFor(item.productImage)?.url() || "/fallback-image.jpg"}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                )}
                {/* Product Details */}
                <div>
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button onClick={() => handleDecrement(item._id)} className="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center">
                  −
                </button>
                <span className="text-lg font-medium">{item.inventory}</span>
                <button onClick={() => handleIncrement(item._id)} className="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center">
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button onClick={() => handleRemove(item._id)} className="text-white rounded-sm hover:text-black font-bold transition transform duration-300 shadow-lg  bg-red-500">Remove</button>
            </div> 
          ))
        ) : (
          <p className="text-gray-500 text-center py-6">No items in cart.</p>
        )}

        {/* Total & Proceed to Checkout */}
        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
            <button 
              onClick={handleProcceed} 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-lg w-full max-w-xs mx-auto block text-center">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
