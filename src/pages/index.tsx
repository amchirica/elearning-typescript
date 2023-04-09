import MainLayout from "@/layouts/mainLayout";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <div>







      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
