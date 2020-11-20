import { Persona } from '../persona/persona';
import { Poblacion } from '../poblacion/poblacion';
import { Servicio } from '../servicio/servicio';

export class Casa {
    idcasa: number;
    nombre: string;
    poblacion: Poblacion;
    //municipio: number;
    descripcion: string;
    personas: number
    habitaciones: number;
    camas: number;
    aseos: number;
    precio_noche: number;
    idusuario: Persona;
    servicios: Servicio[];
    //propietario: number;
    imagen: string;
    ninnos: Boolean;
    mascotas: Boolean;
    barbacoa: Boolean;
    piscina: Boolean;
    chimenea: Boolean;
    cocinaCompleta: Boolean;
    aireAcondicionado: Boolean;
}

