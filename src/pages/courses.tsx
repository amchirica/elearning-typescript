import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement } from "react";
import images from "../../images/about-image.jpg";
import Link from "next/link";



const Courses = () => {
  return <div className="flex flex-wrap gap-3 justify-center">
      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Python</h5>
          </Link>
          <p className="mb-7 font-normal text-gray-700 dark:text-gray-400">Python este un limbaj de programare des întâlnit pentru o
                arie diversificată de domenii, fiind un limbaj dinamic se potriveste pentru
                dezvoltare web, dezvoltare software si multe altele.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>

      <br /><br />
      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">C/C++</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">C/C++ sunt limbaje de programare obiect-orientat, des întâlnite și acestea dar
                nu atât de populare ca Python, este o chestiune de preferințe între acestea două.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>
      <br /><br />

      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Java</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Java este un limbaj de programare de calculator de uz general
                , bazate pe clasă, orientate pe obiecte și în mod specific
                conceput pentru a avea cât mai puține dependențe de implementare.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>

      <br /><br />
      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JavaScript este un program de nivel înalt, interpretor, dinamic, slab tipizat,
                programare bazată pe prototipuri, multi-paradigma. A fost standardizat de ECMAScript
                Internationalization API.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>
      <br /><br />
      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React este o bibliotecă JavaScript pentru construirea de interfețe cu utilizatorul.
                React poate fi folosit ca bază în dezvoltarea de aplicații pe o pagină web sau mobilă. Este
                folosit și la crearea aplicațiilor React Native.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>
      <br /><br />

      <div className="max-w-sm p-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/courses">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Android</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Android este un sistem de operare mobil bazat pe Linux. Era
                dezvoltat de Open Handset Alliance. Este dezvoltat
                folosind limbajul Java. Este o operare gratuită și open source.</p>
          <Link href="/courses" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </Link>
      </div>

  </div>;




};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Courses;
