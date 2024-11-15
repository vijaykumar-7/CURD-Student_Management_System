const mongoose =require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

// password hashing
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await  bcrypt.hash(this.password,10);
    }
    next();
})

const User = mongoose.model("User",userSchema)
module.exports=User;