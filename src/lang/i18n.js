import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          nav: {
            first: "Habilidades",
            second: "Experiencia",
            third: "Educación y Portafolio",
            fourth: "Certificados",
          },
          presentation: {
            title: "Presentación",
            info: {
              name: "Carlos Alberto López Mata",
              work: "Front-End Developer Jr",
              download:"Descargar CV",
            }
          },
          aboutMe: {
            title: "Acerca de mi",
            info: {
              firstParagraph: "Hola! Soy Carlos Mata ",
              secondParagraph:"💼 Profesional, responsable, creativo, organizado con capacitación constante y apasionado de la Tecnología. Con más de 6 años de experiencia en el área de TI y gran fascinación con la programación tratando siempre mantenerme actualizado.",
              thirdParagraph:"💻He tenido la oportunidad de Crear, Administrar sitios web,     Participar en proyectos implementando nuevas funcionalidades y migración de nuevos proyectos a nuevas tecnologías utilizando MicroFronts con nuevas tecnologías.",
              age: "29",
              email: "carlos_1992_@hotmail.com",
              address: "Mérida, Yuc. México."
            }
          },
          skill: {
            title: "Habilidades Profesionales",
            info: {
              skills:"Habilidades",
              sk1: "HTML5",
              sk2:"CSS3",
              sk3:"JavaScript",
              sk4:"Git",
              sk5:"Adobe PhotoShop CS6",
              sk6:"Linux",
              sk7:"Office 365",
              sk8:"Wordpress",
              aptitudes: "Aptitudes",
              ap1:"TeamWork",
              ap2:"Service Desk",
              ap3:"TI",
              languages: "Idiomas",
              lang1:"Español",
              lang2:"Ingles: B1",
            }
          },
          experience: {
            title: "",
            info: {
            }
          },
          education: {
            title: "",
            info: {
            }
          },
          portfolio: {
            title: "",
            info: {
            }
          },
          certificates: {
            title: "",
            info: {
            }
          },
          footer: {
            title: "",
            info: {
            }
          },
        }
      },
      en: {
        translation: {
          nav: {
            first: "Skills",
            second: "Experience",
            third: "Education and Portfolio",
            fourth: "Certifications",
          },
          presentation: {
            title: "Presentation",
            info: {
              name: "Carlos Alberto López Mata",
              work: "Front-End Developer Jr",
              download:"Download CV",
            }
          },
          aboutMe: {
            title: "About Me",
            info: {
              firstParagraph: "Hi! I´m Carlos Mata",
              secondParagraph:"💼 Professional, Respo.....",
              thirdParagraph:"💻I have...........",
              age: "29",
              email: "carlos_1992_@hotmail.com",
              address: "Mérida, Yuc. México."
            }
          },
          skill: {
            title: "Professional Skills",
            info: {
              skills: "Skills",
              sk1: "HTML5",
              sk2:"CSS3",
              sk3:"JavaScript",
              sk4:"Git",
              sk5:"Adobe PhotoShop CS6",
              sk6:"Linux",
              sk7:"Office 365",
              sk8:"Wordpress",
              aptitudes: "Aptitudes",
              ap1:"TeamWork",
              ap2:"Service Desk",
              ap3:"TI",
              languages: "Languages",
              lang1:"Spanish",
              lang2:"English: B1",
            }
          },
          experience: {
            title: "",
            info: {
            }
          },
          education: {
            title: "",
            info: {
            }
          },
          portfolio: {
            title: "",
            info: {
            }
          },
          certificates: {
            title: "",
            info: {
            }
          },
          footer: {
            title: "",
            info: {
            }
          },

        }
      },
    }
  });

export default i18n;