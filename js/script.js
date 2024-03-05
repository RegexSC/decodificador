let encrypt = document.querySelector(".encrypt-text");
let decrypt = document.querySelector(".decrypt-text");
const matrizletters =[["e","enter"], ["i", "imes"],["a","ai"], ["u","uat"],["o","ober"], ["c","top"], ];

function btEncryptext(){
 let encryption = encryptext(encrypt.value);
 decrypt.value =  encryption;
 encrypt.value="";

}

function btDecryptext(){
    let  decryption= decryptext(encrypt.value);
    decrypt.value =  decryption;
    encrypt.value="";
   
   }

function encryptext(encryptedText){
    encryptedText = encryptedText.toLowerCase();
    
    for(i = 0; i < matrizletters.length; i++){
        if (encryptedText.includes(matrizletters[i][0])) {
            encryptedText=encryptedText.replaceAll(matrizletters[i][0],matrizletters[i][1]);
        }
    }
    
    return encryptedText;
}

function decryptext(decryptedText){
    decryptedText = decryptedText.toLowerCase();

    for(i = 0; i < matrizletters.length; i++){
        if (decryptedText.includes(matrizletters[i][1])) {
            decryptedText = decryptedText.replaceAll(matrizletters[i][1],matrizletters[i][0]);
        }
    }
    return decryptedText;
}

