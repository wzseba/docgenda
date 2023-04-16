import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { pacientesAdd } from "../features/pacientes/pacienteSlice";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const pacientes = useSelector((state)=> state.pacientes);
  const dispatch = useDispatch();

  console.log('estoy en useSelector ',pacientes);

  const onSubmit = (data) => {
    console.log("enviado data..", data);
    dispatch(pacientesAdd(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="md:w-auto mx-48 shadow-md rounded-lg py-8 px-5 mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <label className="block font-bold uppercase text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          {...register("nombre", {
            required: true,
            minLength: 3,
            maxLength: 15,
            pattern: /^[a-zA-ZÑñ]+$/,
          })}
          placeholder="Ingrese Nombre"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
        {errors.nombre?.type === "required" && (
          <small className="text-red-500 ml-1">
            El campo no puede ir vacio
          </small>
        )}
        {errors.nombre?.type === "minLength" && (
          <small className="text-red-500 ml-1">
            El campo solo acepta minimo de 3 caracteres'
          </small>
        )}
        {errors.nombre?.type === "maxLength" && (
          <small className="text-red-500 ml-1">
            El campo solo acepta un maximo de 15 caracteres
          </small>
        )}
        {errors.nombre?.type === "pattern" && (
          <small className="text-red-500 ml-1">
            El no puede contener espacios en blanco y solo acepta letras
          </small>
        )}
      </div>

      <div className="mb-5">
        <label className="block font-bold uppercase text-gray-700">
          Email:
        </label>

        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          placeholder="Ingrese Email"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
        {errors.email?.type === "required" && (
          <small className="text-red-500 ml-1">
            El campo no puede ir vacio
          </small>
        )}
        {errors.email?.type === "pattern" && (
          <small className="text-red-500 ml-1">
            El formato de email es incorrecto
          </small>
        )}
      </div>

      <div className="mb-5">
        <label className="block font-bold uppercase text-gray-700">
          Telefono:
        </label>

        <input
          type="tel"
          {...register("telefono", { required: true, pattern: /^\d{3,14}$/ })}
          placeholder="Ingrese Telefono"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
        {errors.telefono?.type === "required" && (
          <small className="text-red-500 ml-1">
            El campo no puede ir vacio
          </small>
        )}
        {errors.telefono?.type === "pattern" && (
          <small className="text-red-500 ml-1">
            Formato de telefono incorrecto
          </small>
        )}
      </div>

      <div className="mb-5">
        <label className="block font-bold uppercase text-gray-700">
          Sintomas:
        </label>

        <textarea
          cols="30"
          rows="8"
          {...register("sintomas", { required: true })}
          placeholder="Descripcion de sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
        />
      </div>

      <input
        type="submit"
        className="bg-gray-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value="ingresar paciente"
      />
    </form>
  );
};

export default Formulario;
