package ruralnow.houseService.Repository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import ruralnow.houseService.entity.Provincia;
import ruralnow.houseService.repository.ProvinciaRepository;

@DataJpaTest
@DisplayName(value = "Test unitarios entidad provincia")
public class ProvinciaRepositoryTest {

	@Autowired
	ProvinciaRepository provinciaRepo;
	
	@Test
	@DisplayName(value = "Listar todas las provincias")
	public void findAll() {
		List<Provincia> provincias = provinciaRepo.findAll();
		//
		assertEquals(provincias.size(),8);
	}
}