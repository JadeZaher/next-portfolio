import React from "react";
import Router from "next/router";
import NavBar from "./Nav.component";
import ContactForm from "./ContactForm.component";
import Paper from "public/crumpled-white-paper-with-torn-edges-2022-05-19-13-32-59-utc[1].png";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: any }) => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <div className={`fixed z-0  min-h-screen w-screen  bg-offBlack`} />

      <NavBar />
      <ContactForm />
      <AnimatePresence initial={false}>
        <div className=" max-w-screen grid min-h-screen items-center py-[160px] ">
          {loading ? <h1>Loading...</h1> : <>{children}</>}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
