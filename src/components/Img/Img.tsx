import Image from "next/image";
import styles from './Img.module.scss'

const Img = (props: any) => {
    return (
        <div >
            <Image
                src="/img/logo-template.webp"
                alt="Logo"
                width={50}
                height={50}
                priority
            />
        </div>
    );
}

export default Img;