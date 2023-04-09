import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import authStore from "@/store/globalStore";

export const Login = () => {
  const {
    apiResponse: { message, status },
    loading,
    setProfile,
  } = authStore();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    authStore.setState({ loading: true });
    try {
      const { data } = await axios({
        method: "POST",
        url: `/api/auth/login`,
        data: user,
      });
      authStore.setState({
        loading: false,
        apiResponse: {
          message: data.message,
          status: true,
        },
      });
      setProfile();
    } catch (error: any) {
      console.log(error);

      authStore.setState({
        loading: false,
        apiResponse: {
          message: error.response.data.message,
          status: false,
        },
      });
    }
  };

  if (status) {
    setTimeout(() => {
      authStore.setState({
        apiResponse: {
          message: null,
          status: false,
        },
      });
      router.push("/");
    }, 2000);
  }

  return (
    <div className="p-10 m:p-24 min-h-screen flex flex-col items-center justify-center text-black">
      <Head>
        <title>Login</title>
      </Head>
      <div className="p-10 bg-gray-100 border-2 border-gray-200 w-full md:w-1/2 shadow-md">
        {message ? (
          <p
            id="message"
            className={`mb-10 ${!status ? "text-red-500" : "text-green-400"}`}
          >
            {message}
          </p>
        ) : null}
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-gray-500 text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              {loading ? "Asteapta..." : "Conecteaza-te"}
            </button>
            <Link href={"/auth/register"}>
              <button className="text-neutral-400 hover:text-black">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

export async function getServerSideProps(ctx: any) {
  const {
    req,
    req: {
      headers: { cookie },
    },
  } = ctx;
  const {
    res: { end },
    res: { writeHead: redirect },
  } = ctx;

  if (cookie && req) {
    redirect(301, {
      Location: "/",
    });
    end();
  }

  return {
    props: {
      logged: true,
    },
  };
}
