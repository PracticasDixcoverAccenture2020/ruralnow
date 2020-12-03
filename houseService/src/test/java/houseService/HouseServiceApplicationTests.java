package houseService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import houseService.ControllerIT.CasaControllerTestIT;
import houseService.ControllerIT.PoblacionControllerIT;
import houseService.ControllerIT.ProvinciaControllerIT;
import houseService.ControllerIT.ReservaControllerIT;
import houseService.ControllerIT.ServicioControllerIT;

import static org.junit.Assert.*;

@SpringBootTest
class HouseServiceApplicationTests {

	@Autowired
	CasaControllerTestIT casaController;
	
	@Autowired
	PoblacionControllerIT poblacionController;
	
	@Autowired
	ProvinciaControllerIT provinciaController;
	
	@Autowired
	ReservaControllerIT reservaController;
	
	@Autowired
	ServicioControllerIT servicioController;
	
	@Test
	void contextLoads() {
		
		assertNull("CasaController is null ", casaController);
		
		assertNull("PoblacionController is null ", poblacionController);
		
		assertNull("ProvinciaController is null ", provinciaController);

		assertNull("ReservaController is null ", reservaController);

		assertNull("ServicioController is null ", servicioController);

	}

}
