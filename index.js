const express = require("express")
const mongoose = require("mongoose")

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

const dotenv = require("dotenv");
dotenv.config();

const app = express();



app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.Mongo_URL)
    app.listen(3000);
    console.log("listing on port 3000")
}

main()