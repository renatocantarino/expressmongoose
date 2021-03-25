const mongoose = require('mongoose');
const url = 'mongodb+srv://renatocantarino:XXX@cantarinocluster.yejbg.mongodb.net/itensdb?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('conectado ao MONGO')
    }).catch(err => console.log(err));

mongoose.Promise = global.Promise;

