import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

import { FieldsInterface } from "../../interface/Fields.interface";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateInput , getRegex } from "../../utils/regex.util";
import { useState } from "react";

interface props {
  fields: FieldsInterface[];
  onSubmitFunction: (data: object) => void;
  action: string;
  legend: string
}

const FormAuth = ({ fields, onSubmitFunction, action, legend }: props) => {
  const [isValid, setIsValid] = useState(false)
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { isSubmitting, errors},
  } = useForm();

  const onSubmit = async (data: any) => {
    await onSubmitFunction(data);
  };

  const getRegExp = (data: string) => {
      const regex = getRegex(data);
      return regex
  }

  const onChange = async (e: any) => {
    setIsValid(false);
    let message = `Verifica el formato o si esta vacio el campo ${e.target.name}`
    let id= 0
    fields.forEach(field => {
      if(field.name === e.target.name){
        message = field.errorMessage
        id= field.id
      }
    })
    if(!validateInput(e.target.value,e.target.name)){
      setError(e.target.name, {type: 'error'});
      toast.warn(message, {
        toastId: id});
    }else{
      clearErrors(e.target.name);
    }
    if(Object.entries(errors).length === 0){
      setIsValid(true);
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.form__title}>
          {legend}
        </h3>
        {fields.map((field) => (
            // {errors[field.name] && <p>{errors[field.name]}</p>
            <input
              key={field.name}
              className={styles.form__control}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, {
                onBlur: onChange,
                required: field.required,
                minLength: field.minLength || 1,
                maxLength: field.maxLength || 20,
                pattern: getRegExp(field.name)
              })}
            />
          ))}
        <button disabled={!isValid}  className={styles.form__submit_btn} >
          {isSubmitting ? "Enviando..." : action ==="singin"? "Login":"Registro"}
        </button>
      </form>
    </div>
  );
};

export default FormAuth;
