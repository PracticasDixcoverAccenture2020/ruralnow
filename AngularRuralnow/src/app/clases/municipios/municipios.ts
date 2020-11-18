import { Provincia } from '../provincia/provincia';


export interface Municipios {
    idpoblacion: number;
    provincia: Provincia;
    poblacion: string;
    poblacionseo: string;
    postal: string;
    latitud: number;
    longitud: number;
}
