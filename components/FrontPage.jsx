import React, { useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const FrontPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/profile");
    }
  }, [session, router]);
  return (
    <div className="h-screen overflow-y-hidden lg:overflow-y-visible">
      <Header />

      <Banner />
    </div>
  );
};

export default FrontPage;
