import React from "react";
import { useForm, FieldErrors } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

const Form = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({ mode: "onChange" });

  const onValid = (data: LoginForm) => {
    resetField("password");
  };

  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 2 chars",
            value: 2,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value: string) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email?.message) ? " border-red-500 border-2" : ""
        }`}
      />
      <span>{errors.email?.message}</span>
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value={"Create"} />
      {errors.errors?.message}
    </form>
  );
};

export default Form;
