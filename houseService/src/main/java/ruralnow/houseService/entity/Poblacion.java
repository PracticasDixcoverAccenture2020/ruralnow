package ruralnow.houseService.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Poblacion {

	@Id
	private int idpoblacion;
	
	/*
	 * Provincia
	 */
	@ManyToOne
	@JoinColumn(name="idprovincia")
	private Provincia provincia;
	
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
	 
	 /*
	  * Casas
	  */
	 //@OneToMany(mappedBy="poblacion")
	 //private List <Casa> casa;
}
