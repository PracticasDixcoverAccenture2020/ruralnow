package ruralnow.houseService.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Reserva {

	@Id
	private int id;
	
	/*
	 * Id de la casa
	 */
	@ManyToOne
	@JoinColumn(name="idcasa")
	private Casa casa;
	
	/*
	 * Id de Usuario
	 */
	@ManyToOne
	@JoinColumn(name="idusuario")
	private Usuario usuario;
	
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
