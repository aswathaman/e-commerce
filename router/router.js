module.exports  = (app) =>{
    const userController = require('../user/controller/user.controller');
    const productController = require('../product/controller/product.controller')
    app.get('/',(req,res)=>{
        res.send("fine")
    })
    app.post('/user/create',userController.userCreateCtrl)
    app.get('/user/find',userController.findUserCtrl)
    app.post('/product/create',productController.productCreateCtrl)
    app.get('/product/find',productController.findProductCtrl)
    app.post('/product/update',productController.updateProductCtrl)
    app.delete('/product/delete',productController.deleteProductCtrl)


 }
