var yuml_diagram = require('yuml-diagram');
var path = require('path');
var fs = require('fs');

function generateSVGfromUML(){
    console.log('Started generating UML files...');
    var dirPath = path.resolve(__dirname, 'patterns');
    var yuml = new yuml_diagram();
    var files = fs.readdirSync(dirPath, { encoding: 'utf8'});
    files.forEach(function(file){
        console.log(`Generating UML diagram for ${file} pattern...`);
        var rootDir = path.resolve(__dirname, 'patterns', file);
        fs.readFile(path.resolve(rootDir, 'index.yuml'),function(err, yumlText){
            if(err){
                console.log(err);
                return;
            }
            var svg = yuml.processYumlDocument(yumlText, false);
            fs.writeFileSync(path.resolve(rootDir, 'index.svg'), svg);
            console.log(`Generated UML diagram for ${file} pattern.`);
        });
    });
}

generateSVGfromUML();