package houseService.dto;

import java.util.List;

import javax.persistence.Id;

import houseService.entity.Poblacion;
import houseService.entity.Servicio;
import houseService.entity.Usuario;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


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
	
	/*
	 * Lista de servicios
	 */
	private List<ServicioDto> servicios;
}
