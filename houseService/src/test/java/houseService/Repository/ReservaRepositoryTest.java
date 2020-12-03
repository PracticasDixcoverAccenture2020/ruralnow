package houseService.Repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import houseService.entity.Reserva;
import houseService.repository.ReservaRepository;

@DataJpaTest
@DisplayName(value="Test unitarios para el repositorio Reserva")
public class ReservaRepositoryTest {

	@Autowired
	ReservaRepository repoReserva;
	
	@Test
	@DisplayName("Listar todas las reservas")
	public void findAll()  {
		List<Reserva> reservas = repoReserva.findAll();		
		assertEquals(9, reservas.size());
	}
	
	@Test
	@DisplayName("Obtener reserva por ID")
	public void findById() {
		Reserva reserva = repoReserva.getOne(1);		
		assertEquals(1, reserva.getId());
	}
	
	@Test
	@DisplayName("Listar reservas por el id de la casa que la tiene")
	public void findByIdCasa() {
		List<Reserva> reservas = repoReserva.findByIdCasa(2);
		
		assertEquals(1, reservas.size());
	}
	
	
}
