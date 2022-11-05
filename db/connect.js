const mongoose = require('mongoose');

db = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log('DB Connection established...')
    }catch(error){
        console.log('Error while connecting DB: ', error);
    }
}

module.exports = db;