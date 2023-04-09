import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement } from "react";

const Pagina = () => {
  return <div>adadadasda</div>;
};

Pagina.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Pagina;
