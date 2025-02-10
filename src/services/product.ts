import { products } from "@/data/products";
import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
    // Simulando uma requisição com atraso
    await new Promise(resolve => setTimeout(resolve, 1000));
    return products;
};