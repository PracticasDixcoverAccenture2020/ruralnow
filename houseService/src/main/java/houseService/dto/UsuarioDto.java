package houseService.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDto {

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
