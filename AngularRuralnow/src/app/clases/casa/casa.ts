import { Persona } from '../persona/persona';
import { Municipios } from '../municipios/municipios';

export class Casa {
    idcasa: number;
    nombre: string;
    idpoblacion: Municipios;
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
    ninnos: Boolean;
    mascotas: Boolean;
    barbacoa: Boolean;
    piscina: Boolean;
    chimenea: Boolean;
    cocinaCompleta: Boolean;
    aireAcondicionado: Boolean;
}

