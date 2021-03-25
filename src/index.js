const express = require('express');
const bodyParser = require('body-parser');
require('./config/database')


const itemRoute = require('./routes/item.route'); 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/item', itemRoute);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta => ${PORT}`);
});