var Item = require('../models/item.model');

exports.create = function (req, res) {
    console.log(req.body)
    let itemModel = new Item(
        {
            nome: req.body.nome,
            marca: req.body.marca
        }
    );

    itemModel.save(function (err) {
        if (err) return next(err);
        res.status(201).json(itemModel);
    })
};

exports.all = function (req, res) {
    Item.find({}).then(function (itens) {
        res.status(200).json(itens);
    });
};


exports.details = function (req, res) {
    Item.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};