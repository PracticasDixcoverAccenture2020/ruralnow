import { Persona } from '../persona/persona';
import { Poblacion } from '../poblacion/poblacion';

export class Casa {
    idcasa: number;
    nombre: string;
    idpoblacion: Poblacion;
    //municipio: number;
    descripcion: string;
    personas: number
    habitaciones: number;
    camas: number;
    aseos: number;
    precio_noche: number;
    idusuario: Persona;
    //propietario: number;
    imagen: string;
    niños: Boolean;
    mascotas: Boolean;
    barbacoa: Boolean;
    piscina: Boolean;
    chimenea: Boolean;
    cocinaCompleta: Boolean;
    aireAcondicionado: Boolean;
}

