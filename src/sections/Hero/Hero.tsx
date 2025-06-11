import { Button } from "@/components/ui/button";
import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.webp";
import hero3 from "../../assets/images/hero3.webp";
import hero4 from "../../assets/images/hero4.webp";
import { HERO_CONTENT } from "./Hero.constants";

export const Hero = () => {
  const content = HERO_CONTENT;

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDetails = () => {
    document.getElementById("dets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main Hero */}
      <section className="relative h-[100svh] grid grid-cols-2 grid-rows-3">
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-30" />
        <article className="absolute inset-0 z-30 flex flex-col justify-center items-center mx-4 text-center">
          <h2 className="text-lg text-white">{content.subtitle}</h2>
          <h1 className="text-4xl font-bold font-title text-white">
            {content.title}
          </h1>
          <p className="text-white text-center mt-4 text-lg">
            {content.description}
          </p>
          <Button
            size="lg"
            className="mt-12 text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={scrollToStory}
          >
            Conoce un poco de la vida de Lupita
          </Button>
          <Button
            variant={"secondary"}
            size="lg"
            className="mt-4 text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={scrollToDetails}
          >
            Ver detalles del evento
          </Button>
        </article>
        <div className="row-span-2 relative">
          <img
            src={hero1}
            alt="Descripción de la imagen"
            className="absolute inset-0 w-full h-full object-cover z-10 xl:object-top"
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-3 relative">
          <img
            src={hero3}
            alt="Descripción de la imagen"
            className="absolute inset-0 w-full h-full object-cover z-10 xl:object-center"
          />
        </div>
        <div className="col-start-2 row-start-1 relative">
          <img
            src={hero2}
            alt="Descripción de la imagen"
            className="absolute inset-0 w-full h-full object-cover z-10 xl:object-top"
          />
        </div>
        <div className="col-start-2 row-start-2 relative">
          <img
            src={hero4}
            alt="Descripción de la imagen"
            className="absolute inset-0 w-full h-full object-cover z-10 xl:object-top"
          />
        </div>
      </section>
    </>
  );
};
