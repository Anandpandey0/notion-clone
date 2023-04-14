import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import logo from "../public/static/images/logo.png";

import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const signInHandler = () => {
    signIn("google");
  };
  useEffect(() => {
    if (session) {
      router.push("/profile");
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[12vh] w-full ">
        <Link href="/">
          <div className="w-[15%] h-full relative">
            <Image src={logo} alt="" fill className="object-contain" />
          </div>
        </Link>
      </div>
      <div className=" w-full lg:w-1/2 mx-auto justify-center  d h-[50vh] text-center p-4 flex flex-col gap-y-4 ">
        <h1 className="text-5xl font-bold">
          {session ? "You are currently logged in" : "Login"}
        </h1>

        {/* {session && console.log(session)} */}
        {session ? (
          <button
            className="border-2 border-solid p-1 mx-auto w-1/2 bg-gray-100 font-semibold flex items-center justify-center gap-2 my-2"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="border-2 border-solid p-1 font-semibold w-1/2  mx-auto flex items-center justify-center gap-2 my-2"
            onClick={signInHandler}
          >
            <FcGoogle />
            Continue with Google
          </button>
        )}
      </div>
    </>
  );
};

export default Login;
