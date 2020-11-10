package ruralnow.houseService.Repository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import ruralnow.houseService.entity.Casa;
import ruralnow.houseService.repository.CasaRepository;

@DataJpaTest
@DisplayName(value="Test unitarios repositorio Casa")
public class CasaRepositoryTest {

	@Autowired
	CasaRepository repoCasa;
	
	@Test
	@DisplayName("Listar todas las casas")
	public void findAll()  {
		List<Casa> casas = repoCasa.findAll();
		
		assertEquals(casas.size(),9);
	}
	
	@Test
	@DisplayName("Listar casas por provincia")
	public void findByProvincia() {
		List<Casa> casas = repoCasa.findByProvincia("Málaga");
		
		assertEquals(casas.size(),8);
	}
	
	@Test
	@DisplayName("Listar casas por provincia")
	public void findByPoblacion_poblacion() {
		List<Casa> casas = repoCasa.findByPoblacion("Antequera");
		
		assertEquals(casas.size(),2);
	}
}
