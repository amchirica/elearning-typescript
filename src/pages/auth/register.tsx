/**
 * @author Sebastian Pavel
 * ? Register page
 */

import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import resetFields from "@/lib/resetFields";
import authStore from "@/store/globalStore";
import axios from "axios";
import DefaultButton from "@/components/Buttons/DefaultButton";

const Register = () => {
  const {
    loading,
    apiResponse: { message, status },
  } = authStore();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeat: "",
  });
  useEffect(() => {
    authStore.setState({
      apiResponse: {
        message: null,
        status: null,
      },
    });
  }, []);

  const checker = (word: any) => {
    if (user.email.length === 0) {
      return true;
    }
    const check = word.split("").includes("@");

    if (check) {
      return true;
    }
    return false;
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();
    authStore.setState({ loading: true });
    if (user.password !== user.repeat) {
      authStore.setState({
        apiResponse: {
          status: false,
          message: "Parolele nu sunt la fel!",
        },
      });
    }
    try {
      const { data } = await axios({
        method: "POST",
        url: `/api/auth/register`,
        data: user,
      });
      authStore.setState({
        loading: false,
        apiResponse: {
          status: true,
          message: data.message,
        },
      });
      resetFields(user);
    } catch (error: any) {
      console.error(error);
      authStore.setState({
        loading: false,
        apiResponse: {
          message: error.response.data.message,
          status: false,
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen px-10">
      <Head>
        <title>Register</title>
      </Head>
      <div className="p-10 bg-gray-100 shadow-md border-2 border-gray-200 w-full md:w-1/2">
        {message ? (
          <div className={`${status ? "text-lime-400" : "text-red-500"} mb-10`}>
            {message ? (
              <div className="flex items-center gap-2">
                <AiOutlineInfoCircle className="text-2xl" />
                {message}
              </div>
            ) : null}
          </div>
        ) : null}
        <form className="">
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              type="text"
              name="floating_lastname"
              id="floating_lastname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_lastname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nume
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              type="text"
              name="floating_firstname"
              id="floating_firstname"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_firstname"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prenume
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className={`peer-focus:font-medium absolute text-sm ${
                checker(user.email)
                  ? "peer-focus:text-blue-600"
                  : "peer-focus:text-red-500"
              } duration-300 transform -translate-y-6 text-gray-400 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {checker(user.email) ? "Adresa email" : "Adresa nu este valida!"}
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Parola
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.repeat}
              onChange={(e) => setUser({ ...user, repeat: e.target.value })}
              type="password"
              name="floating_repeat"
              id="floating_repeat"
              className={`${
                user.password === user.repeat
                  ? "text-green-500"
                  : "text-red-500"
              } block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat"
              className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                user.password !== user.repeat
                  ? "peer-focus:text-red-500"
                  : "peer-focus:text-blue-600"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              {user.password !== user.repeat
                ? "Parolele nu se potrivesc!"
                : "Repeta parola"}
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <DefaultButton
              name="Inregistreaza-te"
              action={(e: any) => handleRegister(e)}
              loading={loading}
            />
            <Link href={`/auth/login`}>
              <button className="text-neutral-400 hover:text-neutral-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
