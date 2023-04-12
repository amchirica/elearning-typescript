import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/CourseCard/Card";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/api/courses",
      });
      console.log(data.data);
      setCourses(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="px-4">
      <div className="h3"> <h3>Politica de confidențialitate a platformei e-learning.</h3></div> 
      <div className="bg-gray-50 mt-10 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
        <a
          href="/policy"
          className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
        >

        <article className="prose lg:prose-xl">

          În cadrul acestei Politici de confidențialitate, vom descrie modul în care colectăm, utilizăm și protejăm informațiile cu caracter personal furnizate de utilizatorii noștri în cadrul platformei noastre de e-learning pentru IT.

                    Colectarea informațiilor cu caracter personal

                    În timpul utilizării platformei noastre de e-learning pentru IT, putem colecta informații cu caracter personal, cum ar fi numele, adresa de e-mail, numărul de telefon, informații de plată și alte informații relevante pentru utilizarea serviciilor noastre. Aceste informații pot fi colectate atunci când utilizatorii se înregistrează pe platforma noastră, completează formulare, trimit mesaje sau interacționează în alt mod cu serviciile noastre.

                    Utilizarea informațiilor cu caracter personal

                    Informațiile cu caracter personal colectate sunt utilizate pentru a oferi și gestiona serviciile noastre de e-learning pentru IT, pentru a procesa plățile, a comunica cu utilizatorii noștri, a furniza asistență tehnică, a îmbunătăți și personaliza experiența utilizatorilor noștri pe platformă și pentru a respecta cerințele legale aplicabile.

                    Protecția informațiilor cu caracter personal

                    Ne angajăm să protejăm informațiile cu caracter personal ale utilizatorilor noștri și să implementăm măsuri de securitate adecvate pentru a preveni accesul neautorizat, utilizarea abuzivă, modificarea sau distrugerea acestor informații. Cu toate acestea, trebuie să țineți cont că nici o metodă de transmitere a datelor prin internet sau stocare electronică nu este complet sigură, iar orice informație transmisă pe platforma noastră este în responsabilitatea dvs. exclusivă.

                    Divulgarea informațiilor cu caracter personal

                    Nu vom dezvălui informațiile cu caracter personal ale utilizatorilor noștri către terțe părți, cu excepția cazurilor în care este necesar din punct de vedere legal, pentru a proteja drepturile și interesele noastre, pentru a asigura funcționarea platformei noastre sau cu consimțământul prealabil al utilizatorilor.

                    Cookie-uri și tehnologii similare

                    Platforma noastră poate utiliza cookie-uri și tehnologii similare pentru a colecta informații despre utilizatori și pentru a îmbunătăți experiența utilizatorilor pe platformă. Utilizatorii pot să configureze setările browserului lor pentru a refuza cookie-urile sau pentru a fi notificați atunci când acestea sunt trimise. Cu toate acestea, refuzarea cookie-urilor poate afecta funcționarea și utilizarea platformei noastre.
        </article>
        
        </a>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mb-20">
        {courses?.map((course: any) => (
          <Card key={course?.id} course={course} />
        ))}
      </div>
    </div>
  );
};

Courses.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Courses;
