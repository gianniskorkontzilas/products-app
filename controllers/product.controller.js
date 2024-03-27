const Product = require('../models/product.model')

exports.findAll = async(req, res) => {
    console.log('Find all products');

    try {
        const result = await Product.find();
        res.status(200).json({data: result})
        console.log("Reading all products")
    } catch (err) {
        console.log(`Problem in finding products, ${err}`)
    }
}

exports.findOne = async(req, res) => {
    console.log("Find a product");

    const id = req.params.id;
    try {
        const result = await Product.findOne({_id: id})
        res.status(200).json({data: result});
    } catch (err) {
        console.log(`Problem in reading products, ${err}`)
    }
}

exports.create = async(req, res) => {
    console.log("Insert a product")

    console.log(req.body)

    const newProduct = new Product({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    })

    try {
        const result = await newProduct.save();
        res.status(200).json({data:result});
        console.log("Product saved")
    } catch (err) {
        res.status(400).json({data: err})
        console.log("Problem in saving product")
    }
}

exports.update = async(req, res) => {
    const id = req.params.id 

    console.log('Product update with id', id);

    console.log(req.body)

    const updateProduct = {
        cost: req.body.cost,
        quantity: req.body.quantity
    }

    try {
        const result = await Product.findOneAndUpdate(
            {_id: id},
            updateProduct
        )
        res.status(200).json({data: result});
        console.log("Success in updating product with id", id)
    } catch (err) {
        res.status(400).json({data: err})
        console.log("Problem in updating product")
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id

    console.log('Delete product with id:', id)

    try {
        const result = await Product.findOneAndDelete(
            {_id: id}
        )
        res.status(200).json({data: result});
        console.log("Success in deleting product", id)
    } catch (err) {
        res.status(400).json({data: err})
        console.log("Problem in deleting product")
    }
}