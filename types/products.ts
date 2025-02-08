import { Image } from "sanity";

// Interface for a product document
export interface Product {
  _id: string; // Unique identifier for the product
  productName: string; // Name of the product
  _type: "product"; // Type of document or entity
  price: number; // Price of the product
  description: string; // Description of the product
  category: string; // Category of the product
  countInStock: number; // Quantity available in stock
  rating?: number; // Optional: Average product rating
  numReviews?: number; // Optional: Number of reviews for the product

  productImage?:{
    asset:{
    _ref:string;
    _type:Image

  }
  
  }
   slug: {
    _type: "slug";
    current: string;
};
inventory:number;
}