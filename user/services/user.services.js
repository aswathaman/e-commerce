const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const  userModel  = require("../model/user.model");
var fs = require('fs');
const { resolve } = require("path");
userService={};

userService.createUserService = (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            userModel.create(req,(err,data)=>{
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
userService.findUserService= (req,res)=>{
    return new Promise((resolve,reject)=>{
        try{
            userModel.find(req,(err,data)=>{
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
module.exports= userService;