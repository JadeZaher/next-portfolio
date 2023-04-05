import React from "react";
import NavBar from "./Nav.component";
import ContactForm from "./ContactForm.component";
import Paper from "public/crumpled-white-paper-with-torn-edges-2022-05-19-13-32-59-utc[1].png";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Paper.src})`,
          backgroundColor: "#FBF9F4",
        }}
        className={`fixed z-0  min-h-screen w-screen  bg-cover bg-fixed bg-clip-border bg-no-repeat tablet:bg-position_paper `}
      ></div>
      <NavBar />
      <ContactForm />
      <div className=" max-w-screen grid min-h-screen items-center py-[120px] ">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
