const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan")
const PORT = 8000;
require('./config/database')


const itemRoute = require('./routes/item.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/item', itemRoute);
app.use(morgan("combined"))


app.listen(PORT, () => {
    console.log(`Servidor em execução na porta => ${PORT}`);
});