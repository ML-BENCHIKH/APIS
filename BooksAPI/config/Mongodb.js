const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true}
   
).then(()=>{console.log('Connected to MongoDB')}).catch((err)=> {console.log('Erreur de connexion a MONGODB',err)})
