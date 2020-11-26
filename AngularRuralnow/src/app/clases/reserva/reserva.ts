import { Casa } from '../casa/Casa';
import { Persona } from '../persona/persona';

export class Reserva {
    id: number;
    casa: Casa;
    usuario: Persona;
    fecha_inicio: Date;
    fecha_fin: Date;
    importe: number;
}
