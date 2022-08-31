const email= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const password= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const compania= /^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$/
const expDefault = /^[0-9]/
export const validateInput = (value: string, field: string) => {
    let expresion;
    switch (field) {
        case 'email':
            expresion = email
            break
        case 'password':
            expresion = password
            break
        case 'compania':
            expresion = compania
            break
        default:
            expresion = expDefault
            break
    }
    return expresion.test(value)
}

export const getRegex = (field:string) => {
    let expresion;
    switch (field) {
        case 'email':
            expresion = email
            break
        case 'password':
            expresion = password
            break
        case 'compania':
            expresion = compania
            break
        default:
            expresion = expDefault
            break
    }
    return expresion
}