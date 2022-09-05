import { NextPageWhithLayout } from "../../types/NextPageWhithLayout";

import fields from "../../assets/Forms/singup.json";
import { singUp } from "../../services/auth.service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContainer from "../../components/Auth/Auth";
import FormAuth from "../../components/Auth/Form/Form";

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

const SingUp:NextPageWhithLayout = () => {
    return (
        <AuthContainer title="Registro de Usuario">
            <FormAuth
                fields={fields.fields}
                onSubmitFunction={onSubmit}
                action="singup"
                legend="Registro"
            />
        </AuthContainer>
    );
}

SingUp.layout = "Auth"
export default SingUp;