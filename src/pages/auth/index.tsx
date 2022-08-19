import { NextPage } from "next";
import { FiLogIn } from "react-icons/fi";
import Button from "../../components/Button/Button";
import { callAPI } from "../../services/auth.service";

const Auth:NextPage= () => {
    const getdata = async () => {
        const data = await callAPI({username: 'username', password: 'password'});
    }

    return (
        <div>
            <h1>Auth</h1>
            <button onClick={getdata}>get data</button>
        </div>
    );
}

export default Auth;