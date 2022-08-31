import { NextPage } from "next";

import fields from "../../assets/Forms/singup.json";
import { singUp } from "../../services/auth.service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContainer from "../../components/Auth/Auth";

const onSubmit = async (data: any) => {
        const response = await singUp(data)
        if(response.detail === "Email already registered" || "Username already registered" ) {
            toast.error("Correo o Username duplicados", {
                toastId: 1});
        }else {
            toast.success("Registro Realizado Correctamente", {
                toastId: 2});
        }
}

const SingUp:NextPage = () => {
    return (
        <main>
            <AuthContainer fieldsArray={fields.fields} onSubmit={onSubmit} action="singup" legend="Registro"/>
        </main>
    );
}

export default SingUp;