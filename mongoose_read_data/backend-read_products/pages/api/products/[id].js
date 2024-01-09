//import { products } from "../../../lib/products";
import dbConnect from 'db/connect.js';
import Product from 'db/models/Product.js';

export default async function handler(request, response) {

  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const products = await Product.findById(id).populate([{ path: "reviews", strictPopulate: false }]);

    console.log(products)

    return response.status(200).json(products);
  }

  else {
    return response.status(404).json({ status: "Not Found" });
  }

}
