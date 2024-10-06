import Resume from "../frontend/resume";
import Proyectos from "../frontend/proyectos";

import Contacto from "../frontend/contacto";

const route = [
    {
        path: '/Inicio',
        component: Resume
    },
    {
        path: '/proyectos',
        component: Proyectos
    },
    {
        path: '/Contacto',
        component: Contacto
    }
]

export default route;