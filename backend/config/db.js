const mongoose=require('mongoose')


const connectDB=async()=>{
    try {
        const conn=await mongoose.connect('mongodb://localhost:27017/Goal-Setter')

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports=connectDB