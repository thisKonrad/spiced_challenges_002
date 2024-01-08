

import { getProductById } from "@/services/productServices";


export default function IDProduct(req, res) {

    const { id } = req.query;
    console.log("id: ", id);

    const product = getProductById(id)

    if (!product) {
        return res.status(404).json({ status: "Not found" });
    }

    res.status(200).json(product);
}