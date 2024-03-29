import { useDispatch } from 'react-redux';
import { checkingAuthentication } from "../features/auth/thunks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEnvelope, FaEye } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [showPwd, setShowPwd] = useState(false);

  const onSubmit = (data) => {
    console.log("enviado data..", data);
    dispatch(checkingAuthentication())
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl text-center font-bold uppercase">
        Login component
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 md:w-1/2 lg:w-1/3 mx-48 shadow-md rounded-lg py-8 px-5 mt-10"
      >
        <div className="h-32 relative">
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
          <span className="absolute inset-y-0 right-0 pr-3 pb-5 flex items-center">
            <FaRegEnvelope className="h-5 w-5 text-gray-400"/>
          </span>

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

        <div className="h-32 relative">
          <label className="block font-bold uppercase text-gray-700">
            Password:
          </label>

          <input
            type={showPwd ? "text" : "password"}
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
            })}
            placeholder="Ingrese password"
            className="py-2 pl-3 pr-8 mt-2 w-full rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <span
            className="absolute inset-y-0 right-0 pr-3 pb-5 flex items-center"
            onClick={() => setShowPwd(!showPwd)}
          >
            {showPwd ? (
              <FaEye className="h-5 w-5 text-gray-400" />
            ) : (
              <FaEyeSlash className="h-5 w-5 text-gray-400" />
            )}
          </span>

          {errors.password?.type === "required" && (
            <small className="text-red-500 ml-1">El campo no puede ir vacio</small>
          )}
          {errors.password?.type === "pattern" && (
            <small className="text-red-500 ml-1">
              El formato de password debe contener entre 8 y 15 caracteres una
              mayuscula una minuscula un digito un caracter especial
            </small>
          )}
        </div>

        <div className='flex justify-around'>

          <div className="relative rounded-md shadow-sm">
              <input 
              type="submit"
              className="w-72 md:w-40 p-3 rounded-md bg-gray-700 border-none text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" 
              value="ingresar"/>
              <div className="absolute inset-y-0 left-3 flex items-center">
                <FcGoogle/>
              </div>
          </div>
          <div className="relative rounded-md shadow-sm">
              <input 
              type="submit"
              className="w-72 md:w-40 p-3 rounded-md bg-gray-700 border-none text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" 
              value="google"/>
              <div className="absolute inset-y-0 left-3 flex items-center">
                <FcGoogle/>
              </div>
          </div>
        
        </div>
        
      </form>
    </div>
  );
};

export default Login;
