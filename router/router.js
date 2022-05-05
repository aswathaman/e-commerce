module.exports  = (app) =>{
    const userController = require('../user/controller/user.controller')
    app.get('/',(req,res)=>{
        res.send("fine")
    })
    app.post('/user/create',userController.userCreateCtrl)
    app.get('/user/find',userController.findUserCtrl)

 }
