// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');


//knex('bicicletas').select('*').then(function(projectNames){
    //do something here

    /*
    console.log(projectNames);
    console.log("------------------------------");
    console.log(projectNames[0]);
    console.log("------------------------------");
    console.log(projectNames[0].id);
    console.log(projectNames[0].color);
    console.log(projectNames[0].modelo);
    console.log(projectNames[0].lon);
    console.log(projectNames[0].lat);*/

    //Añadir un par de bicis:
    //let b1 = new Bicicleta(projectNames[0].id, projectNames[0].color, projectNames[0].modelo, [projectNames[0].lat, projectNames[0].lon])
    //let b2 = new Bicicleta(projectNames[1].id, projectNames[1].color, projectNames[1].modelo, [projectNames[1].lat, projectNames[1].lon])

    //Bicicleta.add(b1)
    //Bicicleta.add(b2)

//});
let Bicicleta = function (color, modelo, lat, lon) {
  this.color = color;
  this.modelo = modelo;
  this.lat = lat;
  this.lon = lon;
};

Bicicleta.prototype.toString = function () {
  return `Id: ${this.id}, color: ${this.color}`;
};

Bicicleta.allBicis = () => {
  // Realiza la consulta dentro de knex
  return knex.select("*").from("bicicletas");
};

Bicicleta.add = function (aBici) {
  return knex("bicicletas").insert({
    color: aBici.color,
    modelo: aBici.modelo,
    lat: aBici.lat,
    lon: aBici.lon,
  });
};

//Eliminar
Bicicleta.findById = function (aBiciId) {
  // let aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
  // if (aBici) {
  //   return aBici;
  // } else {
  //   throw new Error(`No existe una bici con el id: ${aBiciId}`);
  // }
  return knex.select("*").from("bicicletas").where("id", aBiciId).first();
};

Bicicleta.removeById = function (aBiciId) {
  // for (let i = 0; i < Bicicleta.allBicis.length; i++) {
  //   if (Bicicleta.allBicis[i].id == aBiciId) {
  //     //Borrar
  //     Bicicleta.allBicis.splice(i, 1);
  //     break;
  //   }
  // }
  return knex("bicicletas").delete().where("id", aBiciId);
};

Bicicleta.update = (id, aBici) => {
  return knex("bicicletas")
    .update(aBici)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

module.exports = Bicicleta;
