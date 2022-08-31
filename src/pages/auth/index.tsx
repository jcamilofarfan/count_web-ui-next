import { NextPage } from "next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContainer from "../../components/Auth/Auth";

import fields from "../../assets/Forms/login.json";
import { login } from "../../services/auth.service";
import * as storeMemoryService from "../../services/storeMemory.Service";
import { MEMORY_KEYS } from "../../utils/enums/memory-keys";

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

const Auth:NextPage= () => {
    return (
        <main>
            <AuthContainer fieldsArray={fields.fields} onSubmit={onSubmit} action="singin" legend="Iniciar Sesion"/>
        </main>
    );
}

export default Auth;