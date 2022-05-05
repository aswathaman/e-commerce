const userService = require('../services/user.services.js');
UserCtrl={}
UserCtrl.userCreateCtrl = (req,res)=>{
   let  reqs = req.body;
userService.createUserService(reqs).then(result=>{
    res.send({
        code:200,
        message:"User Created",
        data:result,
        status:true
    })
},(err)=>{
    res.send({code:err.code,message:err.message})
})
}
UserCtrl.findUserCtrl = (req,res)=>{
   let  reqs = req.body;
   userService.findUserService(reqs)
   .then((result)=>{
    res.send({
        code:200,
        message:"Users Found",
        data:result,
        status:true
    })
},(err)=>{
    res.send({code:err.code,message:err.message})
})
}


module.exports = UserCtrl
