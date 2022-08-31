import { json } from "stream/consumers";
import { MEMORY_KEYS } from "../utils/enums/memory-keys";
import * as cryptoService from "./crypto.service";

export const setLocalItemByKey = (key: MEMORY_KEYS, data:any) => {
    localStorage.setItem(btoa(key), cryptoService.encrypt(data));
}

export const setSessionItemByKey = (key: MEMORY_KEYS, data:any) =>{
    sessionStorage.setItem(btoa(key), cryptoService.encrypt(data));
}

export const getSessionItemByKey = (key:MEMORY_KEYS) =>{
    console.log("export const getSessionItemByKey = (key:MEMORY_KEYS)")
    try {
        return cryptoService.decrypt(sessionStorage.getItem(btoa(key))!)
    } catch(e) {
        console.log(e)
        return undefined
    }
}

export const getLocalItemByKey = (key: MEMORY_KEYS) => {
    console.log("export const getLocalItemByKey = (key: MEMORY_KEYS)")
    try {
        return cryptoService.decrypt(localStorage.getItem(btoa(key))!)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

export const removeItemSessionItemByKey= (key: MEMORY_KEYS) =>{
    sessionStorage.removeItem(btoa(key))
}

export const removeItemLocalItemByKey = (key:MEMORY_KEYS) => {
    localStorage.removeItem(btoa(key))
}

export const clearLocalStorage= () =>{
    localStorage.clear();
}

export const clearSessionStorage = () => {
    sessionStorage.clear();
}