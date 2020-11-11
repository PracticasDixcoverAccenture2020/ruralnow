package ruralnow.houseService.dto;

import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ruralnow.houseService.entity.Poblacion;
import ruralnow.houseService.entity.Usuario;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CasaDto {

	private int idcasa;
	
	/*
	 * Nombre de la casa
	 */
	private String nombre;
	
	/*
	 * Municipio al que pertenece
	 */
	private PoblacionDto poblacion;
	
	/*
	 * Descripción
	 */
	private String descripcion;
	
	/*
	 * Capacidad de personas
	 */
	private int personas;
	
	/*
	 * Número de habitaciones
	 */
	private int habitaciones;
	
	/*
	 * Número de camas
	 */
	private int camas;
	
	/*
	 * Aseos
	 */
	private int aseos;
	
	/*
	 * Precio por noche
	 */
	private int precio_noche;
	
	/*
	 * Propietario de la casa
	 */
	private UsuarioDto usuario;
	
	/*
	 * Imagen
	 */
	private String imagen;
	
	
	
	
}
