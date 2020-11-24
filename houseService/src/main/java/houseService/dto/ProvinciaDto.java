package houseService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProvinciaDto {

	private int idprovincia;
	
	/*
	 * Nombre provincia
	 */
	private String provincia;
	
	/*
	 * Provinciaseo
	 */
	private String provinciaseo;
	
	/*
	 * Abreviatura
	 */
	private char Abreviatura;
	
	/*
	 * Comunidad
	 */
	private String comunidad;
}
