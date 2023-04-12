import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement } from "react";
import images from "../../images/about-image.jpg";


const About = () => {
  return (
<div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Rezultate</h1>


      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Top students:</h2>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> with <span className="font-semibold text-gray-900 dark:text-white">70</span> points
          </li>
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span> with <span className="font-semibold text-gray-900 dark:text-white">63</span> points
          </li>
          <li>
              <span className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> with <span className="font-semibold text-gray-900 dark:text-white">57</span> points
          </li>
      </ol>


</div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
