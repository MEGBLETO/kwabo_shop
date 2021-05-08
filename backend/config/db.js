import mongoose from 'mongoose'



const connectDB = async() =>{
  try {
    /*connection here */
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log(`MongoDB connection was a success and your host is ${conn.connection.host}`.cyan.underline)
  } catch(error){
    console.log(`Error: ${error.message}` .red.underlined.bold)
    process.exit(1)
  }
}

export default connectDB