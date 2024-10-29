import { useEffect, useRef, /*useState*/ } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "./registration-form-schema"
import { Field } from "./components";
import styles from "./app.module.css";


function App() {
  const {
    register, handleSubmit, trigger, formState: {touchedFields, isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(registrationFormSchema),
    mode: "onTouched",
  });

  
  const submitButtonRef = useRef(null);

  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
  };

 
  useEffect(() => {
    if (isValid) {
      submitButtonRef.current.focus();
    }
  }, [isValid]);

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          placeholder="E-mail..."
          error={errors.email?.message}
          {...register("email")} />
        <Field
          type="password"
          placeholder="Password..."
          error={errors.password?.message}
          {...register("password", {
            onChange: () => touchedFields.passcheck && trigger("passcheck"),
          })} 
          />
        <Field
          type="password"
          placeholder="Passcheck"
          error={errors.passcheck?.message}
          {...register("passcheck")} />
        <button type="submit" disabled={!isValid} ref={submitButtonRef}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
