
import { getAllProducts } from "@/services/productServices";


export default function handler(req, res) {

    console.log("Backend!");

    const products = getAllProducts();
    res.status(200).json(products);

}