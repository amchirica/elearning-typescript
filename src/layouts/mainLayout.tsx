import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

function MainLayout({ children }: any) {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
