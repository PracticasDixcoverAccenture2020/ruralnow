package houseService.entity;

import java.util.List;


import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
	private Poblacion poblacion;
	
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
	private Usuario usuario;
	
	/*
	 * Imagen
	 */
	private String imagen;
	
	
	
	
	
	
}
