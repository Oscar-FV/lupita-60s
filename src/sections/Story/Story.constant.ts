export interface storyChapter {
  decade: string;
  title: string;
  description: string;
  backgroundImage: string;
  content: string;
  desktopPosition?: string;
}

export const STORY_CHAPTERS: storyChapter[] = [
  {
    decade: "1965s",
    title: "El Comienzo",
    description:
      "Nacida en San Luis Potosí, el mundo conoció a una mujer destinada a brillar.",
    backgroundImage: "../src/assets/images/chapters/chapter-1.webp",
    content:
      "En 1965, llegó al mundo una niña que con el tiempo se convertiría en el corazón de su familia. Segunda de cinco hermanos, creció entre juegos, risas y la calidez de un hogar que forjó su carácter fuerte y generoso. Desde el inicio, Dios la acompañó, guiando con amor cada paso en su caminar.",
    desktopPosition: "center 30%",
  },
  {
    decade: "1970s-80s",
    title: "Pasión y Propósito",
    description:
      "Entre libros, bailes y misiones, empezó a construir su camino.",
    backgroundImage: "../src/assets/images/chapters/chapter-2.webp",
    content:
      "Desde joven mostró un espíritu curioso y determinado. Estudió Ingeniería en Alimentos, siendo parte de las primeras generaciones en lograrlo. Participaba activamente en misiones, llevando esperanza y fe a quienes más lo necesitaban. En el baile y en el estudio, Dios siempre fue su compañero fiel, impulsándola a soñar y a servir con alegría.",
  },
  {
    decade: "1990s",
    title: "Amor y Familia",
    description:
      "Trabajo, matrimonio y el nacimiento de sus tres grandes amores.",
    backgroundImage: "../src/assets/images/chapters/chapter-3.webp",
    content:
      "En los años 90, su vida floreció en muchos sentidos. Comenzó su carrera profesional en Coronado, trabajando con compromiso y pasión. En 1990, se casó con Oscar, y juntos formaron una familia hermosa. Durante esta década llegaron sus tres hijos: Sofía, Mauricio y Oscar. Cada nacimiento fue un regalo de Dios, y cada desafío una oportunidad para fortalecer su fe y su amor por la vida.",
      desktopPosition: "center 30%",
  },
  {
    decade: "2000s",
    title: "Creciendo Juntos",
    description: "Infancia, viajes y un hogar lleno de momentos inolvidables.",
    backgroundImage: "../src/assets/images/chapters/chapter-4.webp",
    content:
      "Los años 2000 estuvieron marcados por juegos en casa, paseos en familia y aprendizajes compartidos. Fue una madre presente, alegre y fuerte, siempre creando espacios de amor. Dios estuvo en su hogar: en las oraciones antes de dormir, en los abrazos sinceros y en cada conversación que sembró fe y esperanza en sus hijos.",
      desktopPosition: "center 40%",
  },
  {
    decade: "2010s",
    title: "Energía que Inspira",
    description: "Una mujer que sigue brillando y acompañando con sabiduría.",
    backgroundImage: "../src/assets/images/chapters/chapter-5.webp",
    content:
      "Su espíritu activo nunca se apagó. Sigue bailando, cantando y regalando alegría a todos los que la rodean. Es el corazón de su familia, un ejemplo de fortaleza, resiliencia y luz. Su fe en Dios continúa siendo su motor diario, fuente de sabiduría, serenidad y propósito.",
      desktopPosition: "center 10%",
  },
  {
    decade: "2020s",
    title: "60 Años de Amor",
    description:
      "Una vida celebrada, un corazón agradecido, y muchas historias por venir.",
    backgroundImage: "../src/assets/images/chapters/chapter-6.webp",
    content:
      "Hoy celebramos seis décadas llenas de amor, entrega, risas y momentos que han marcado a todos los que la conocen. A lo largo de su vida, Dios ha sido su guía constante, su fuerza en las tormentas y su alegría en los días buenos. Gracias por ser ejemplo de fe viva, de amor en acción y de luz que no se apaga.",
      desktopPosition: "center 30%",
  },
];
