const productService = require('../services/product.services.js');
productCtrl={}
productCtrl.productCreateCtrl = (req,res)=>{
   let  reqs = req.body;
productService.createProductService(reqs).then(result=>{
    res.send({
        code:200,
        message:"product Created",
        data:result,
        status:true
    })
},(err)=>{
    res.send({code:err.code,message:err.message})
})
}
productCtrl.findProductCtrl = (req,res)=>{
   let  reqs = req.query;
   productService.findProductService(reqs)
   .then((result)=>{
    res.send({
        code:200,
        message:"products Found",
        data:result,
        status:true
    })
},(err)=>{
    res.send({code:err.code,message:err.message})
})
}


module.exports = productCtrl
