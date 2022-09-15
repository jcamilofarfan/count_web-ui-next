import { NextPageWhithLayout } from "../../types/NextPageWhithLayout";

import fields from "../../assets/Forms/singup.json";
import { singUp } from "../../services/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContainer from "../../components/Auth/Auth";
import FormAuth from "../../components/Auth/Form/Form";
import { useRouter } from "next/router";

const SingUp: NextPageWhithLayout = () => {
    const router = useRouter();
    const onSubmit = async (data: any) => {
        const response = await singUp(data);
        if (!response.detail) {
            router.push("/")
        }else{
            toast.error("Correo o Username duplicados", {
                toastId: 1,
            });
        }
    };

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
};

SingUp.layout = "Auth";
export default SingUp;
