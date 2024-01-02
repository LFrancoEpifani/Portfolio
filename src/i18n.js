import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de idiomas y recursos
const resources = {
  en: {
    translation: {
      // Contenido en inglés
      work: 'WORKS',
      aboutAndContact: "ABOUT & CONTACT",
      subtitle: "Frontend Web Developer",
      gozice: "Landing Page for acai bowls and smoothies. Developed with Astro for a fast and interactive user interface. Interactive and fast user interface. Styled with Tailwind CSS for a responsive and attractive design.",
      coindom: "This web application uses React and SASS to provide a dynamic and stylish user experience. Using the CoinGecko API, it provides up-to-date data on cryptocurrencies, including prices and market trends.",
      aboutme: "ABOUT ME",
      ubication: "Front-end Web Developer in Barcelona, Spain📍",
      description: "As a Junior Front-End Developer, my skill set includes a solid knowledge of HTML, CSS, JavaScript, React, Tailwind and SCSS. I specialize in creating and managing responsive websites that deliver an exceptional user experience. My expertise lies in developing vibrant and interactive interfaces by writing efficient and well-organized code and applying various development tools and methodologies. In addition, I am adept at working in team environments, collaborating effectively with multidisciplinary teams to develop world-class web applications.",
      contact: "Contact",
      phone: "Phone",
      soon: "SOON",
      lenguage: "Lenguage",
      projects: "PROJECTS",
      copyright: '© 2023 Luciano Epifani. All rights reserved'
    },
  },
  es: {
    translation: {
      // Contenido en español
      work: 'PROYECTOS',
      aboutAndContact: "SOBRE MÍ & CONTACTO",
      subtitle: "Desarrollador Web Frontend",
      gozice: "Landing Page de acaí bowls y smoothies. Desarrollado con Astro para una interfaz de usuario interactiva y rápida. Estilizado con Tailwind CSS para un diseño responsivo y atractivo.",
      coindom: "Esta aplicación web utiliza React y SASS para ofrecer una experiencia de usuario dinámica y estilizada. Mediante la API de CoinGecko, provee datos actualizados sobre criptomonedas, incluyendo precios y tendencias de mercado. ",
      aboutme: "SOBRE MÍ",
      ubication: "Desarrollador Web Front-end en Barcelona, España📍",
      description: "Como Desarrollador Front-End Junior, mi conjunto de habilidades incluye un sólido conocimiento de HTML, CSS, JavaScript, React, Tailwind y SCSS. Me especializo en la creación y gestión de sitios web responsivos que ofrecen una experiencia de usuario excepcional. Mi experiencia radica en el desarrollo de interfaces vibrantes e interactivas escribiendo código eficiente y bien organizado y aplicando diversas herramientas y metodologías de desarrollo. Además, soy experto en trabajar en entornos de equipo, colaborando eficazmente con equipos multidisciplinares para desarrollar aplicaciones web de primera categoría.",
      contact: "Contacto",
      phone: "Teléfono",
      soon: "PRÓXIMAMENTE",
      lenguage: "Lenguaje",
      projects: "PROYECTOS",
      copyright: '© 2023 Luciano Epifani. Todos los derechos reservados'
    },
  },
};

i18n
  .use(initReactI18next) // Adapta i18next a React
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo si no se encuentra uno específico
    interpolation: {
      escapeValue: false, // Evita la sanitización automática
    },
  });

export default i18n;
