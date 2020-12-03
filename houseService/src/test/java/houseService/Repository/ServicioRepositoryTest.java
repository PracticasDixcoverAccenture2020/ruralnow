package houseService.Repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import houseService.entity.Servicio;
import houseService.repository.ServicioRepository;

@DataJpaTest
@DisplayName(value="Test unitarios repositorio Servicio")
public class ServicioRepositoryTest {

	@Autowired
	ServicioRepository repoServicio;
	
	@Test
	@DisplayName("Listar todos los servicios")
	public void findAll()  {
		List<Servicio> servicios = repoServicio.findAll();
		
		assertEquals(7, servicios.size());
	}
}
