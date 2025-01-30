const { Router } = require('express');
const adminRouter = Router();


adminRouter.post("/signup" , function(req , res){
    res.json({
        message:"signup"
    })
})

adminRouter.post("/course" , function(req , res){
    res.json({
        message:"signin"
    })
})

adminRouter.post("/course" , function(req , res){
    res.json({
        message:"course"
    })
})

adminRouter.post("/course" , function(req , res){
    res.json({
        message:"course"
    })
})

adminRouter.post("/course" , function(req , res){
    res.json({
        message:"course"
    })
})

module.exports = {
    adminRouter : adminRouter
}