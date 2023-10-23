const mongoose=require("mongoose")
require("dotenv")
require("colors")
const URI=process.env.MONGO_URI
const connectDB=async ()=>{
   try{
    const conn=await mongoose.connect(URI)
    console.log(`Database Connected: ${conn.connection.host}`.green.underline)

   }catch(error){
console.log(error)
process.exit(1)
   }
}
module.exports=connectDB