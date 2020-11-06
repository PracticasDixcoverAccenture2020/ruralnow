package ruralnow.houseService.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
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
import lombok.Singular;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Casa {

	@Id
	private int idcasa;
	
	/*
	 * Nombre de la casa
	 */
	private String nombre;
	
	/*
	 * Municipio al que pertenece
	 */
	@ManyToOne
	@JoinColumn(name="idpoblacion")
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
	@ManyToMany
    @JoinTable(name = "casa_servicio",
    		   joinColumns = @JoinColumn(name = "idcasa"),
    		   inverseJoinColumns = @JoinColumn(name = "idservicio")
    		  )
    private List<Servicio> servicios;
	
	/*
	 * Precio por noche
	 */
	private int precio_noche;
	
	/*
	 * Propietario de la casa
	 */
	@ManyToOne
	@JoinColumn(name="idusuario")
	private Usuario propietario;
	
	/*
	 * Imagen
	 */
	private String imagen;
	
	
	
	
}
