package houseService.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

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
	private int idusuario;
	
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
