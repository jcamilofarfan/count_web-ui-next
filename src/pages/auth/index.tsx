import { NextPageWhithLayout } from "../../types/NextPageWhithLayout";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as storeMemoryService from "../../services/storeMemory.Service";
import { login } from "../../services/auth.service";
import { MEMORY_KEYS } from "../../utils/enums/memory-keys";

import fields from "../../assets/Forms/login.json";
import AuthContainer from "../../components/Auth/Auth";
import FormAuth from "../../components/Auth/Form/Form";


const Auth:NextPageWhithLayout= () => {
    const router = useRouter()
    const onSubmit = async (data: object) => {
        const response = await login(data);
        if(response.detail) {
            toast.error(response.detail, {
                toastId: 1});
        }else {
            toast.success("Successfully Login", {
                toastId: 2});
            storeMemoryService.setLocalItemByKey(MEMORY_KEYS.TOKEN, response.access_token)
            router.push("/dashboard")
        }
    }

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