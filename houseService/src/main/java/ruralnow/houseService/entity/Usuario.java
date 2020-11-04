package ruralnow.houseService.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	/*
	 * Nombre
	 */
	private String nombre;
	
	/*
	 * Apellidos
	 */
	private String apellidos;
	
	/*
	 * Fecha de nacimiento
	 */
	private Date fecha_nac;
	
	/*
	 * Contraseña
	 */
	private String password;
	
	/*
	 * Email
	 */
	private String email;
	
	/*
	 * Teléfono de contacto
	 */
	private String telefono;
	
}
