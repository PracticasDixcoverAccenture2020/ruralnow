package ruralnow.houseService.ControllerIT;

import static org.junit.Assert.assertEquals;

import java.net.URL;

import org.dozer.DozerBeanMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import houseService.dto.ReservaDto;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ReservaControllerIT {

	/** DozerMapper. */
	DozerBeanMapper mapper = new DozerBeanMapper();

	@LocalServerPort
	private int port;

	private URL all;
	private URL byid;
	private URL byCasa;

	@Autowired
	private TestRestTemplate template;

	private final String SERVICIO_ALL = "Reserva/getAll/";
	private final String SERVICIO_BYID = "Reserva/byId/1";
	private final String SERVICIO_BYIDCASA = "Reserva/casa/2";

	private final Integer NUM_TOTAL_RESERVAS = 2;
	private final String STATUS_OK = "200 OK";
	private final int ID_RESERVA = 1;



	@Before
	public void setUp() throws Exception {
		this.all = new URL("http://localhost:" + port + "/" + SERVICIO_ALL);
		this.byid = new URL("http://localhost:" + port + "/" + SERVICIO_BYID);
		this.byCasa = new URL("http://localhost:" + port + "/" + SERVICIO_BYIDCASA);
	}

	/**
	 * Devuelve todas las reservas
	 * @throws Exception
	 */
	@Test
	public void getAll() throws Exception {
		testLongitud(all, NUM_TOTAL_RESERVAS.intValue());
	}


	/**
	 * Test devuelve la reserva que se esperaba con un id dado
	 * @throws Exception
	 */
	@Test
	public void getById() throws Exception {
		ResponseEntity<ReservaDto> response = template.getForEntity(byid.toString(), ReservaDto.class);
		assertEquals(STATUS_OK, response.getStatusCode().toString());
		ReservaDto reserva = response.getBody();
		assertEquals(ID_RESERVA, reserva.getId());
	}

	
	@Test
	public void getByIdCasa() throws Exception {
		testLongitud(byCasa, 1);
	}


	/**
	 * Test total de registros igual al esperado
	 * @param url
	 * @param total
	 * @throws Exception
	 */
	private void testLongitud(URL url, int total) throws Exception {
		ResponseEntity<Object[]> response = template.getForEntity(url.toString(), Object[].class);

		assertEquals(STATUS_OK, response.getStatusCode().toString());
		Object[] objects = response.getBody();
		assertEquals(total, objects.length);
	}



	
}
