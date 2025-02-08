


"use client"

import Image from "next/image";
import { useEffect,useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { seven } from "@/sanity/lib/query";
import Swal from "sweetalert2";
import Link from "next/link";
import { AddtoCart } from "../action/action";
import { urlFor } from "@/sanity/lib/image";


export default function GreenDiv() {






  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(seven);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    AddtoCart(product);
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false, 
      timer: 1000,
    });

  } ;
  
  return (
    <div className="container mx-auto px-4 py-8">


<div className="rounded-[5px] bg-[#23856D] mt-[10px]  border">
      <div className="w-full h-auto flex justify-center items-center py-10">
        <div className="w-full max-w-[1036px] relative flex flex-col lg:flex-row gap-10 lg:gap-[80px] px-4">
          {/* Left Section */}
          <div className="w-full lg:w-[509px] flex flex-col gap-[30px] text-center lg:text-left">
            <h4 className="font-Montserrat font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[36px] lg:text-[58px] leading-[50px] lg:leading-[80px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] lg:leading-[24px] text-white">
              We know how large objects will act, We know how our objects will
              act, We know
            </p>



            
      
      
    
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-[34px] mt-4">
              <h3 className="font-Montserrat font-bold text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-white">
                $16.48
              </h3> 
               <button className="w-full sm:w-auto lg:w-[184px] h-[52px] rounded-[5px] bg-[#2DC071] flex items-center justify-center px-6 py-3"> 
                <h1 className="font-Montserrat text-[14px] leading-[22px] text-white"> 
                   ADD TO CART 
                   
                </h1> 
               </button> 
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center w-full h-full">
  <Image
    src="/4page.jpg"
    width={450}
    height={400}
    alt="Greenman"
    className="object-contain"
  />
</div>

        </div>
      </div>
    </div>
  </div>
  )
}

      
      
      