const Bicicleta = require('../models/bicicleta')

// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function (req, res) {
  let lat = parseFloat(req.body.lat).toFixed(6);
  let lon = parseFloat(req.body.lon).toFixed(6);
  let temp_bici = new Bicicleta(req.body.color, req.body.modelo, lat, lon);

  Bicicleta.add(temp_bici)
  
  res.redirect("/bicicletas")
};

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.params.id) 
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.findById(req.params.id)

    Bicicleta.update(bici)

    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    let bici = Bicicleta.findById(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]

    res.redirect('/bicicletas')
}