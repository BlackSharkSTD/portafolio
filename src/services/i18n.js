import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    fallbackLng: "es",
    resources: {
        es: {
            translation: {
                title: "Hola",
                ErrorTitle: "¡Página no encontrada!",
                back: "Regresar",
                email: "Correo",
                home: "Inicio",
                about: "Acerca",
                aboutus: "Acerca de Nosotros",
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
                contactus: "Contáctenos",
                newrequest: "Nueva Solicitud",
            },
        },
        en: {
            translation: {
                title: "Hello",
                ErrorTitle: "Page not found!",
                back: "Back",
                enter: "Enter",
                email: "Email",
                home: "Home",
                about: "About",
                aboutus: "About Us",
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
                contactus: "Contact Us",
                newrequest: "New Request",
            },
        },
    },
});