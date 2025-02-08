


import { Product } from "../../../types/products";


export const AddtoCart=(product:Product)=>{
    const cart:Product[]=JSON.parse(localStorage.getItem("cart")||"[]")
    const exitingProductindex=cart.findIndex(item=>item._id===product._id)
    if (exitingProductindex > -1) {
        cart[exitingProductindex].inventory+=1
    }
    else{
        cart.push({
            ...product,inventory:1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
export const removefromCart=(productid:string)=>{
    let cart:Product[]=JSON.parse(localStorage.getItem("cart")||"[]")
    cart=cart.filter(item=>item._id!==productid)
    localStorage.setItem("cart",JSON.stringify(cart))
}
export const updateCartquantity=(productid:string,quantity:number)=>{
const cart:Product[]=JSON.parse(localStorage.getItem("cart")||"[]")
const productindex=cart.findIndex(item=>item._id===productid)
if(productindex >-1){

cart[productindex].inventory=quantity;
localStorage.setItem("cart",JSON.stringify(cart))
}
}
export const getCartItems=():Product[]=>{
    return JSON.parse(localStorage.getItem("cart")||"[]")
}

