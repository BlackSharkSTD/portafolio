import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                title: "Hello",
                ErrorTitle: "Page not found!",
                back: "Back",
                enter: "Enter",
                email: "Email",
                home: "Home",
                about: "About Us",
                contact: "Contact",
                services: "Services",
                portfolio: "Portfolio",
                requests: "Requests",
                store: "Store",
                MSuccess: "Message sent",
                MError: "Can't send message",
                send: "Send",
                name: "Name",
                message: "Message",
                newrequest: "New Request",
            },
        },
        es: {
            translation: {
                title: "Hola",
                ErrorTitle: "¡Página no encontrada!",
                back: "Regresar",
                email: "Correo",
                home: "Inicio",
                about: "Acerca",
                contact: "Contacto",
                services: "Servicios",
                portfolio: "Portafolio",
                store: "Tienda",
                requests: "Solicitudes",
                MSuccess: "Mensaje Enviado",
                MError: "No se puede enviar el mensaje",
                send: "Enviar",
                name: "Nombre",
                message: "Mensaje",
                newrequest: "Nueva Solicitud",
                aboutcode: 'Estos son algunos lenguajes de programación con los que he estado trabajando en los últimos años:',
                aboutos: '',
            },
        },
    },
});