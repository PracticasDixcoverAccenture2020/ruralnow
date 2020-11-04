package ruralnow.houseService.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
public class Casa {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	/*
	 * Nombre de la casa
	 */
	private String nombre;
	
	/*
	 * Municipio al que pertenece
	 */
	@ManyToOne
	@JoinColumn(name="municipio")
	private Poblacion municipio;
	
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
	 * Servicios que ofrece la casa
	 */
	Set<String> servicios;
	
	/*
	 * Precio por noche
	 */
	private int precio_noche;
	
	/*
	 * Propietario de la casa
	 */
	private int propietario;
	
	/*
	 * Imágenes
	 */
	@OneToMany(mappedBy="casa")
	List <Imagen> imagenes;
	
	
	
	
}
