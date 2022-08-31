import * as CryptoJs from "crypto-js";

const key ='prueba'
const saltRounds = 10

export const encrypt = (data: any)=> {
    const cipherText = CryptoJs.AES.encrypt(JSON.stringify(data), key)
    return cipherText.toString();
}

export const decrypt = (cipherText:string) => {
    console.log("export const decrypt = (cipherText:string)")
    const bytes = CryptoJs.AES.decrypt(cipherText, key);
    return parseItem(bytes.toString(CryptoJs.enc.Utf8))
}


const parseItem = (item: any) =>{
    if(!!!item){
        return null;
    }
    return JSON.parse(item)
}