const { mongoose } = require("mongoose");
 
const connection = async ()=>{
    try {
        const isConnected = await mongoose.connect(process.env.DB_CONNECTION);
        if(isConnected)
            console.log("Connected to mongoddb")
    } catch (error) {
        console.log("Connection to mongodb failed")
    }
}

module.exports  = connection;