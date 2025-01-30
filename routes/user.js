const { Router } = require("express");

const userRouter = Router();

    userRouter.post("/signup" , function(req ,res){
        res.json({
            message:"SignUp"
        })
    })
    
    userRouter.post("/signin" , function(req ,res){
        res.json({
            message:"SignIN"
        })
    })
    
    userRouter.get("/purchases " , function(req ,res){
        res.json({
            message:"SignIN"
        })
    })


module.exports = {
    userRouter : userRouter
}