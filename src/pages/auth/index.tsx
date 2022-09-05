import { NextPageWhithLayout } from "../../types/NextPageWhithLayout";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContainer from "../../components/Auth/Auth";

import fields from "../../assets/Forms/login.json";
import { login } from "../../services/auth.service";
import * as storeMemoryService from "../../services/storeMemory.Service";
import { MEMORY_KEYS } from "../../utils/enums/memory-keys";
import FormAuth from "../../components/Auth/Form/Form";

const onSubmit = async (data: object) => {
    const response = await login(data);
    if(response.detail === "Incorrect username or password" ) {
        toast.error(response.detail, {
            toastId: 1});
    }else {
        toast.success("Successfully Login", {
            toastId: 2});
        storeMemoryService.setLocalItemByKey(MEMORY_KEYS.TOKEN, response)
    }
}

// {/* <AuthContainer fieldsArray={fields.fields} onSubmit={onSubmit} action="singin" legend="Iniciar Sesion"/> */}
const Auth:NextPageWhithLayout= () => {
    return (
        <AuthContainer title="Inicio de Sesion">
            <FormAuth
                fields={fields.fields}
                onSubmitFunction={onSubmit}
                action="singin"
                legend="Iniciar Sesion"
            />
        </AuthContainer>
    );
}

Auth.layout = "Auth";
export default Auth;