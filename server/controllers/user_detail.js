const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.auth= async(req,res) =>{
    console.log("Login route");
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(452).json({error:"Error 1",success:false});
    }

    // check for existing User
    // await for asynchronous operation
    console.log(email);
    const isexist = await User.findOne({"email":email});
    console.log(isexist);
    if(!isexist){
        return res.status(453).json({error:"Error 2",success:false});
    }

    // compare password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const ismatch = bcrypt.compareSync(isexist.password, hash);

    if(!ismatch){
        return res.status(454).json({error:"Error 3",success:false});
    }

    // const token = jwt.sign({_id:isexist._id},process.env.SECRET_KEY);

    res.json({
        // token,
        user:{
            _id:isexist._id,
            name:isexist.name,
            email:isexist.email,
            role:isexist.role
        },
        success: true
    });
}

