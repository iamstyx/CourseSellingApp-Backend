const { Router } = require("express");

    const courseRouter = Router();

    courseRouter.post("/purchase" , function(req ,res){
        // You would expect to user to pay you money
        res.json({
            message:"User Purchase"
        })
    })
    
    courseRouter.get("/preview" , function(req ,res){
        res.json({
            message: "Courses"
        })
    })


module.exports = {
    courseRouter: courseRouter
}