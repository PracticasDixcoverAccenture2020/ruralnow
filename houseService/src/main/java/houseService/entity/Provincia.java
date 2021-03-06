package houseService.entity;

import java.util.List;

import javax.persistence.Entity;

import javax.persistence.Id;
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
public class Provincia {

	@Id
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
	
	/*
	 * Poblaciones
	 */
	@OneToMany(mappedBy="provincia")
	private List<Poblacion> poblaciones;
}
