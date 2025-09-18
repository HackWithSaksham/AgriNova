import mongoose, { mongo } from "mongoose"

const FarmerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    resetotp:{type:Number,default:null},
    resetotpexpiresat:{type:Number,default:0},
    country:{type:String,required:true},
    state:{type:String,required:true},
    email:{type:String,required:true},
    bank:{type:String,required:true},
    phone:{type:Number,required:true},
    crops:[{type:String,required:true}],
    co2saved:{type:Number},
    badges:[{type:mongoose.Schema.Types.ObjectId,ref:"badges"}],
    reviews:[{type:String}],
    story:{type:String,required:true},
    needs:[{type:mongoose.Schema.Types.ObjectId,ref:"needs"}],
})

export const farmermodel = mongoose.models['farmer'] || mongoose.model('farmer',FarmerSchema)

const BadgesSchema = new mongoose.Schema({
    category:{type:String,required:true},
    image:{type:String}
})

export const badgesmodel = mongoose.models['badges'] || mongoose.model('badges',BadgesSchema)

const NeedsSchema = new mongoose.Schema({
    farmer:{type:mongoose.Schema.Types.ObjectId,ref:"farmer",required:true},
    storyline:{type:String,required:true},
    currentneed:[{type:String}],
    amount:{type:Number},
    status:{type:Boolean,default:false}
})

export const needmodel = mongoose.models['needs'] || mongoose.model('needs',NeedsSchema)


const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    resetotp:{type:Number,default:null},
    resetotpexpiresat:{type:Number,default:0},
    email:{type:String,required:true},
    phone:{type:Number,required:true}
})

export const usermodel = mongoose.models['user'] || mongoose.model('user',UserSchema)