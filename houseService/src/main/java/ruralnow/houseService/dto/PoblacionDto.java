package ruralnow.houseService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PoblacionDto {

	private int idpoblacion;
	
	/*
	 * Provincia
	 */
	private ProvinciaDto provincia;
	
	/*
	 * Poblacion
	 */
	private String poblacion;
	
	/*
	 * Poblacionseo
	 */
	private String poblacionseo;
	
	/*
	 * Número postal
	 */
	private int postal;
	
	/*
	 * Latitud
	 */
	private float latitud;
	
	/*
	 * Longitud
	 */
	 private float longitud;
}
