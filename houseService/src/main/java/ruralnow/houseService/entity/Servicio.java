package ruralnow.houseService.entity;

import java.util.List;

import javax.persistence.Entity;
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
public class Servicio {

	@Id
	private int idservicio;
	
	private String nombre;
	
	@ManyToMany(mappedBy="servicios")
	List<Casa> casas;
}
