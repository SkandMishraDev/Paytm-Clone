const express =require("express")
const router =express.Router()
const z =require("zod")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const {User,Account} =require("..db/") 
const JWT_SECRET = require("../config");

// Define a schema
const singupSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6),
    userName: z.string().email(), // Email should be a valid email
  });

const signinSchema =z.object({
    password: z.string().min(6),
    userName: z.string().email(), 
});  

router.post('/signup',async (req,res) => {
    try {
        const validation =singupSchema.parse(req.body)
    } catch (error) {
        res.status(403).json({
            msg:"Invalid input"
        })
        return
    }
    const existingUser =await User.findOne({
        userName:req.body.userName
    })
    if(existingUser){
        res.status(409).json({
            msg:"User already Exist"
        })
        return
    }
    const user= await User.create(validation);
    //     {
    //     // userName: req.body.userName,
    //     // firstName: req.body.firstName,
    //     // lastName:req.body.lastName,
    //     // password:req.body.password,
    // }

    const userId =user._id;

    ///----------Create new account -------------

    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })

    const token =jwt.sign({userId},JWT_SECRET,{ expiresIn: '1h' });
    res.json({
        msg:"User Created successfully",
        token,
    })
})

router.post('/signin',async (req,res) => {
    try {
       const validation =signinSchema.parse(req.body)
    } catch (error) {
        res.status(401).json({
            msg:"Invalid input"
        }) 
        return
    }
    const user =await User.findOne({
        userName:req.body.userName,
        password:req.body.password,
    })
    if(user&& await bcrypt.compare(req.body.password, user.password)){
        const token =jwt.sign({
            userId:user._id
        },JWT_SECRET,{ expiresIn: '1h' })

        res.json({
            token: token
        })
        return;
    }else{
    res.status(411).json({
        msg:"error while logging in"
    })
}
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


// other auth routes

const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})


module.exports = router;