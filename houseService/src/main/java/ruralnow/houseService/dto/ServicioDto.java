package ruralnow.houseService.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServicioDto {
	
	/*
	 * Id del servicio
	 */
	private int idservicio;
	
	/*
	 * Nombre del servicio
	 */
	private String nombre;
	
	/*
	 * Icono del servicio
	 */
	private String icono;

}
