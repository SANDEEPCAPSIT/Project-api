const user = require("../models/user-models");
const home = async (req, res) => {
    try{
        res
        .status(200).json({ massage: "welcome to router page in home section" })
        .send("welcome to router page in home section")
    } catch (error) {
        res.status(500).json("interval server error");
    }
};

const register = async (req, res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email aleady exist"});
        }
        const userCreated = await User.userCreated({username, email, phone, password});
        
        res.status(200).json({ massage: userCreated });
    } catch (error) {
        res.status(500).json("interval server error");
    }
};
module.exports = {home, register};