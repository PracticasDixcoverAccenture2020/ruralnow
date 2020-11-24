package ruralnow.houseService.dto;

import java.util.Date;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReservaDto {

	private int id;

	
	private CasaDto casa;

	/*
	 * Id de Usuario
	 */
	private UsuarioDto usuario;

	/*
	 * Fecha inicio reserva
	 */
	private Date fecha_inicio;

	/*
	 * Fecha fin de reserva
	 */
	private Date fecha_fin;

	/*
	 * Importe
	 */
	private int importe;
}
