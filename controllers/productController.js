const Product = require("../models/productModel");


//CREATE PRODUCT
const createProduct = async (req, res) => {
  const name = req.body.name;
  try {
    const product = await Product.create(req.body);
    res.status(201).json({message:"Product Created Successfully", product: product });
  } catch (error) {
        res.status(500).json({ message: "something went wrong!!" });
    console.log(error)
  }
};


//GET PRODUCT
const getProducts =async(req,res)=>{
  try {
    const product = await Product.find({})
    res.status(200).json({message:"Get all products successfully",product:product })
  } catch (error) {
    res.status(500).json({ message: "something went wrong!!" });
    console.log(error);
  }
}

//UPDATE PRODUCT
const updateProduct = async(req,res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    res.status(200).json({message:"Product updated successfully",product:product})
  } catch (error) {
    res.status(500).json({ message: "something went wrong!!" });
    console.log(error);
  }
}

//DELETE PRODUCT
const deleteProduct = async (req,res)=>{
  try {
    const {id}=req.params;
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({message:"Product deleted successfully",product:product})
  } catch (error) {
    res.status(500).json({ message: "something went wrong!!" });
    console.log(error);
  }
}

module.exports ={createProduct,getProducts,updateProduct,deleteProduct}
