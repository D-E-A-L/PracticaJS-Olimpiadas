var express = require('express');
var router = express.Router();

var controles = require('.././controles');

//ruta que apunta a la carpeta controles hoja:controlesPrincipales dentro de eso a la funcion indicio
router.get('/', controles.controlesPrincipales.indicio);

module.exports = router;
