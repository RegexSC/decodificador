let encrypt = document.querySelector(".encrypt-text");
let decrypt = document.querySelector(".decrypt-text");
const matrizletters =[["e","enter"], ["i", "imes"],["a","ai"], ["u","uat"],["b","axei"], ["c","top"], ];

function btEncryptext(){
 let decryption = encryptext(encrypt.value);
 decrypt.value =  decryption;
 encrypt.value="";

}

function btDecryptext(){
    let encryption = decryptext(decrypt.value);
    encrypt.value =  encryption;
    decrypt.value="";
   
   }

function encryptext(encryptedText){
    // const matrizletters =[["e","enter"], ["i", "imes"], ["a","ai"], ["u","uat"], ["o","ober"]];
    encryptedText = encryptedText.toLowerCase();
    
    for(i = 0; i < matrizletters.length; i++){
        if (encryptedText.includes(matrizletters[i][0])) {
            encryptedText=encryptedText.replaceAll(matrizletters[i][0],matrizletters[i][1]);
        }
    }
    console.log(encryptedText)
    return encryptedText;
}

function decryptext(decryptedText){
    // const matrizletters =[["e","enter"], ["i", "imes"],["a","ai"],["o","ober"], ["u","uat"], ["c","top"]];
    decryptedText = decryptedText.toLowerCase();

    for(i = 0; i < matrizletters.length; i++){
        if (decryptedText.includes(matrizletters[i][1])) {
            decryptedText = decryptedText.replaceAll(matrizletters[i][1],matrizletters[i][0]);
        }
    }
    return decryptedText;
}

