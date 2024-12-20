//generateur de mot de pass
const { strict } = require('assert');
const generatePassword = require('generate-password'); 

// generateur de mot de pass
function generateRandomPassword(){
    const password = generatePassword.generate({
        length : 12, 
        numbers : true ,
        symbols : true , 
        uppercase : true ,
        lowercase : true ,
        strict : true , 
    });
    console.log(' generateur password :'  , password);
}
//appel fonction
generateRandomPassword();

