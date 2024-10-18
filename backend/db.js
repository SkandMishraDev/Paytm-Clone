const mongoose =required("mongoose")

async()=>{
    const responce=await mongoose.connect("");
    console.log("mongoose.connected")
}

const userSchema =new mongoose.Schema({
    fristName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
},{timestamps:true});

const accountSchema =new mongoose.Schema({
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }    

})

const User = mongoose.model('User',userSchema)
const Account =mongoose.model('Account',accountSchema)


module.exports={
    User,
    Account,
};