const User  = require("../models/user-models.js");
const home = async (req, res) => {
    try{
        res
        .status(200).json({ massage: "welcome to router page in HomE section" })
        .send("welcome to router page in home section")
    } catch (error) {
        res.status(500).json("interval server home error");
    }
};


// const register = async (req, res) => {
//     try {
//         console.log(req.body);
//         res.status(200).json({ massage: "req.body" });
//     } catch (error) {
//         res.status(500).json("interval server error");
//     }
// };

const register = async (req, res) => {
    try {
        // console.log(req.body)
        // console.log("user",User);
        const { username, email, phone, password } = req.body;
         console.log(req.body)
        
        const userExist = await User.findOne({ email });
        
        
        if(userExist){
            return res.status(400).json({msg:"email aleady exist"});
        }

        const userCreated = await User.create({username, email, phone, password});
      
        userCreated.save()
        res.status(200).json({ massage: userCreated });
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error");
    }
};
module.exports = {home, register};