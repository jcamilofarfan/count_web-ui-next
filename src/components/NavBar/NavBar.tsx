import { FiLogIn } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
import Button from "../Button/Button";
import Img from "../Img/Img";
import styles from './NavBar.module.scss'

const NavBar= (props: any) => {
    return (
        <div className={styles.navbar}>
                <Img data={
                    {
                        width: 50,
                        height: 50,
                } }/>
                <div className={styles.buttons}>
                    <Button
                        data={{
                            destiny: "/about",
                            status: "normal",
                            text: "About"
                        }}
                    >
                        <SiAboutdotme />
                    </Button>
                    <Button
                        data={{
                            destiny: "/auth/singup",
                            status: "secondary",
                            text: "REGISTRO"
                        }}
                    >
                    </Button>
                    <Button
                        data={{
                            destiny: "/auth",
                            status: "primary",
                            text: "INICIAR SESIÓN"
                        }}
                    >
                        <FiLogIn />
                    </Button>
                </div>
        </div>
    );
}

export default NavBar;