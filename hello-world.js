
//creation 
const salut = "hello world";
console.log(salut);

//creation d'un serveur
const http = require('http');
  const serveur = http.createServer((requete , reponse) =>{
    reponse.write(" <h1>Bonjour Node!!!</h1>")
  });

  //ecouter le serveur
  serveur.listen( 3000 , "localhost" , () =>{
    console.log("le serveur est ecouter sur le port  " + 3000);
    
  });
 

 

  // importation module
  const fs = require ('fs');
  //creation de fichier
  fs.writeFile('welcome.txt' , 'hello Node' , (error) => {
    if(error){
        console.log('erreur de creation');
    }
    else{
        console.log('fichier cree avec succes'); 
    }
  } )
  //lecture du fichier
  fs.readFile('welcome.txt' , 'utf8' , (error , data)  =>{
    if(error){
        console.log('erreur lors du creation de fichier');
        
    }
    else{
        console.log(" le  fichier contient  :" + data);
        
    }
  });
 


