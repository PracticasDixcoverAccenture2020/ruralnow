import { Persona } from '../persona/persona';
import { Poblacion } from '../poblacion/poblacion';

export class Casa {
    id: number;
    nombre: string;
    //municipio: Poblacion;
    municipio: number;
    descripcion: string;
    personas: number
    habitaciones: number;
    camas: number;
    aseos: number;
    precio_noche: number;
    //propietario: Persona;
    propietario: number;
    imagen: string;
}

