import MainLayout from "@/layouts/mainLayout";
import React, { ReactElement } from "react";
import images from "../../images/about-image.jpg";


const About = () => {
  return (
<div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Despre noi</h1>
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
        <img src="/images/about-image.jpg" alt="Descriere imagine" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Platforma noastră de e-learning este creată pentru a oferi studenților acces la cele mai bune resurse educaționale online, indiferent de locație sau orar. Suntem dedicați să oferim o experiență de învățare unică și interactivă, care să ajute studenții să-și dezvolte abilitățile și cunoștințele într-un mediu sigur și confortabil.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Echipa noastră este formată din experți în domeniul educației și tehnologiei, care sunt mereu pregătiți să ofere suport și asistență tuturor utilizatorilor noștri. Vă invităm să explorați oferta noastră de cursuri online și să vă alăturați comunității noastre de învățare.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 px-4 py-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Misiunea noastră</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Scopul nostru este de a oferi o experiență educațională de calitate, care să ajute studenții să-și atingă obiectivele academice și profesionale. Suntem dedicați să promovăm învățarea continuă și să contribuim la dezvoltarea resurselor educaționale de înaltă calitate, care să poată fi accesate de oricine, oriunde și oricând.
        </p>
      </div>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
