/* eslint-disable @next/next/no-img-element */
import { ToastContainer } from "react-toastify";
import { FieldsInterface } from "../../interface/Fields.interface";
import FormAuth from "../Form/Form";
import styles from "./auth.module.scss";

interface props {
  fieldsArray: FieldsInterface[];
  onSubmit: (data: object) => void;
  action: string;
  legend: string
}

const AuthContainer = ({ fieldsArray, onSubmit, action, legend }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__box}>
        <div className={styles.container__left}>
          <div className={styles.container__padding}>
            <img
              src="/img/20944201.jpg"
              alt="Image by vectorjuice"
              className={styles.container__image}
            />
          </div>
        </div>
        <div className={styles.container__right}>
          <FormAuth
            fields={fieldsArray}
            onSubmitFunction={onSubmit}
            action={action}
            legend={legend}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthContainer;
