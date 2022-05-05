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
module.exports= productService;