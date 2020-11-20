import { Persona } from '../persona/persona';

import { Poblacion } from '../poblacion/poblacion';

import { Servicio } from 'src/app/clases/servicio/servicio';

export class Casa {
    idcasa: number;
    nombre: string;
    poblacion: Poblacion;
    descripcion: string;
    personas: number
    habitaciones: number;
    camas: number;
    aseos: number;
    precio_noche: number;
    usuario: Persona;

    imagen: string;
    servicios: Servicio [];
}

