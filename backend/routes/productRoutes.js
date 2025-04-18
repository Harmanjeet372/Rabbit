const express=require("express");
const Product=require("../models/Product");
const {protect,admin}=require("../middleware/authMiddleware");

const router=express.Router();

//route post /api/products
//descrip Create a new product
//access private/admin

router.post("/",protect,admin,async(req,res)=>{
    try{
        const{name,description,price,discountPrice,countInStock,category,brand,sizes,colors,collections,material,gender,images,isFeatured,isPublished,tags,dimensions,weight,sku}=req.body;
        const product=new Product({name,description,price,discountPrice,countInStock,category,brand,sizes,colors,collections,material,gender,images,isFeatured,isPublished,tags,dimensions,weight,sku,
            user:req.user._id, //it will reference to the admin who created the product
        });
        const createdProduct=await product.save();
        res.status(201).json(createdProduct);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//route PUT /api/products:id
//descrip Update an existing product id
//access private/admin
router.put("/:id",protect,admin,async(req,res)=>{
    try{
        const{name,description,price,discountPrice,countInStock,category,brand,sizes,colors,collections,material,gender,images,isFeatured,isPublished,tags,dimensions,weight,sku}=req.body;
        //Find product by id
        const product=await Product .findById(req.params.id);
        if(product){ //this is for the thing when we find the product in db
            //updating the product fields
            product.name=name || product.name;
            product.description=description|| product.description;
            product.price=price || product.price;
            product.discountPrice=discountPrice || product.discountPrice;
            product.countInStock=countInStock || product.countInStock;
            product.category=category || product.category;
            product.brand=brand || product.brand;
            product.colors=colors|| product.colors;
            product.collections=collections || product.collections;
            product.material=material || product.material;
            product.gender=gender || product.gender;
            product.images=images || product.images;
            product.isFeatured=
            isFeatured!==undefined?isFeatured:product.isFeatured;
            product.isPublished=
            isPublished!==undefined?isPublished:product.isPublished;
            product.tags=tags || product.tags;
            product.dimensions=dimensions || product.dimensions;
            product.weight=weight|| product.weight;
            product.sku=sku || product.sku;
            
            //Save the product to the database
            const updatedProduct=await product.save();
            res.json(updatedProduct);
        }
        else{ //when we dont find the product
            res.status(404).json({message:"Product  not found"});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//route Delete /api/products:id
//descrip Delete an existing product id
//access private/admin
router.delete("/:id",protect,admin,async(req,res)=>{
    try{
        //find the product by id
        const product=await Product.findById(req.params.id);
        if(product){
            //delete the product
            await product.deleteOne();
            res.json({message:"Product deleted successfully"});
        }
        else{
            res.status(404).json({message:"Product not found"});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }

});

module.exports=router;