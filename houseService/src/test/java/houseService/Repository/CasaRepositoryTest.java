package houseService.Repository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import houseService.entity.Casa;
import houseService.repository.CasaRepository;

@DataJpaTest
@DisplayName(value="Test unitarios repositorio Casa")
public class CasaRepositoryTest {

	@Autowired
	CasaRepository repoCasa;
	
	@Test
	@DisplayName("Listar todas las casas")
	public void findAll()  {
		List<Casa> casas = repoCasa.findAll();
		
		assertEquals(9, casas.size());
	}
	
	@Test
	@DisplayName("Obtener casa por ID")
	public void findById() {
		Casa casa = repoCasa.getOne(7);
		
		assertEquals("El Nogal", casa.getNombre());
	}
	
	@Test
	@DisplayName("Listar casas por provincia")
	public void findByProvincia() {
		List<Casa> casas = repoCasa.findByProvincia("Málaga");
		
		assertEquals(8, casas.size());
	}
	
	@Test
	@DisplayName("Listar casas por provincia")
	public void findByPoblacion_poblacion() {
		List<Casa> casas = repoCasa.findByPoblacion("Antequera");
		
		assertEquals(2, casas.size());
	}
}
