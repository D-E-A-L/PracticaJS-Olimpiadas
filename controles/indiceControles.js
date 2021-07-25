var fs = require('fs');
var path = requiere('path');

var files = fs.readdirSync(__dirname);

files.forEach(function(file){
	var fileName = path.badename(file. '.js');

	//hace referencia a contorlesPrincipales de la carpeta controles
	if(fileName !== 'indiceControles'){
		exports[fileName] = require('./'+ fileName);
	}
});