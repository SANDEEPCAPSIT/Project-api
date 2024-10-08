require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

// app.get("/",(req, res)=>{
//     res.status(200).send("welcome sandeep");
// });



// app.get("/register",(req, res) => {
//     res.status(200).send("welcome REGISTER sandeep");
// });

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () =>{
        console.log(`server is runing port:${PORT}`);
    });
});
  