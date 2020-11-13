package ruralnow.houseService.Repository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import ruralnow.houseService.entity.Poblacion;
import ruralnow.houseService.repository.PoblacionRepository;

@DataJpaTest
@DisplayName(value = "Test unitarios de entidad poblacion")
public class PoblacionRepositoryTest {

	@Autowired
	PoblacionRepository poblaRepo;
	
	/*
	 * Listar todas las poblaciones
	 */
	@Test
	@DisplayName(value = "Listar todos")
	public void findAll(){
		List<Poblacion> poblaciones = poblaRepo.findAll();
		
		assertEquals(poblaciones.size(),776);
	}
	
	/*
	 * Listar poblaciones por provincia
	 */
	@Test
	@DisplayName(value = "Listar por provincia")
	public void byProvincia() {
		List<Poblacion> poblaciones = poblaRepo.findByProvincia_provincia("Málaga");
		
		assertEquals(poblaciones.size(),102);
	}
}