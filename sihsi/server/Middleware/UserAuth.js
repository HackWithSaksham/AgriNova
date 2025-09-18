import jwt from 'jsonwebtoken';
import { farmermodel } from '../models/model.js';

const userAuth = async (req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.json({success:false,message:"Auth Failed"});
    }
    try{
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);

        const farmer = await farmermodel.findById(tokenDecode.id);
        if(!farmer){
            return res.json({success:false,message:"User Not Found"});
        }
        req.farmer=farmer;
        next();
    }
    catch(error){
        return res.json({success:false,message:error.message});
    }
}

export default userAuth;