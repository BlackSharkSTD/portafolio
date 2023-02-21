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
        en: {
            translation: {
                title: "Hello",
                ErrorTitle: "Page not found!",
                back: "Back",
                enter: "Enter",
                email: "Email",
                home: "Home",
                about: "About",
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
        it: {
            translation: {
                title: "Ciao",
                ErrorTitle: "Pagina non trovata!",
                back: "Indietro",
                enter: "Entrare",
                email: "Email",
                home: "Home",
                about: "Circa",
                contact: "Contatto",
                services: "Servizi",
                portfolio: "Portafoglio",
                requests: "Richieste",
                store: "Negozio",
                MSuccess: "Messaggio inviato",
                MError: "Impossibile inviare il messaggio",
                send: "Inviare",
                name: "Nome",
                message: "Messaggio",
                newrequest: "Nuova richiesta",
            },
        },
    },
});
