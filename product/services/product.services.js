const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const  productModel  = require("../model/product.model");
var fs = require('fs');
const { resolve } = require("path");
productService={};

productService.createProductService = (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            productModel.create(req,(err,data)=>{
                if(!err){
                    return resolve(data)
                }
                else{
                    return reject(err)
                }
            })
        }
        catch(err){
            return reject(err)
        }
    })

}
productService.findProductService= (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            productModel.find(req,(err,data)=>{
                if(!err){
                    return resolve(data)
                }
                else{
                    return reject(err)
                }
            })
        }
        catch(err){
            return reject(err)
        }
    })
}

productService.updateProductService = (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            productModel.findOneAndUpdate({_id:req.id},req,(err,data)=>{
              
                if(!err){
                    return resolve(data)
                }
                else{
                    return reject(err)
                }
               
            })
        }
        catch(err){
            return reject(err)
        }
    })   
}

productService.deleteProductService= (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            productModel.remove({_id:req.id},(err,data)=>{
                if(!err){
            
                    if(data.deletedCount > 0){
                        
                        return resolve(data)
                    }
                    return reject({message: "data not found on given input"})
                }
                else{
                    return reject(err)
                }
            })
        }
        catch(err){
            return reject(err)
        }
    })
}
module.exports= productService;