import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement } from "react";
import images from "../../images/about-image.jpg";


const About = () => {
  return (
<div className="container mx-auto px-40 py-10">


      <h1 className="text-3xl font-bold mb-6">Rezultate</h1>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Andrei Chirica</span> with <span className="font-semibold text-gray-900 dark:text-white">78</span> points
          </li>
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Mark Stone</span> with <span className="font-semibold text-gray-900 dark:text-white">73</span> points
          </li>
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Natasha Valenkov</span> with <span className="font-semibold text-gray-900 dark:text-white">67</span> points
          </li>
      </ol>


      <div className="img1">
        <img src="images/banner.png" alt="index" className="img1"/>
      <div className="overlay-text"></div>
      </div>

</div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
