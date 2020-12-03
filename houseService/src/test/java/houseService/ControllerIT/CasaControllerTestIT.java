package houseService.ControllerIT;

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

import houseService.dto.CasaDto;



@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CasaControllerTestIT {
	
	/** DozerMapper. */
	DozerBeanMapper mapper = new DozerBeanMapper();

	@LocalServerPort
	private int port;

	private URL all;
	private URL byid;
	private URL byprovincia;
	private URL bypoblacion;

	@Autowired
	private TestRestTemplate template;

	private final String SERVICIO_ALL = "Casa/getAll/";
	private final String SERVICIO_BYID = "Casa/byId/7";
	private final String SERVICIO_BYPROVINCIA = "Casa/byProvincia/Málaga";
	private final String SERVICIO_BYPOBLACION = "Casa/byPoblacion/Antequera";

	private final String STATUS_OK = "200 OK";
	private final Integer NUM_TOTAL_CASAS = 9;
	private final String NOMBRE_CASA = "El Nogal";

	@Before
	public void setUp() throws Exception {
		this.all = new URL("http://localhost:" + port + "/" + SERVICIO_ALL);
		this.byid = new URL("http://localhost:" + port + "/" + SERVICIO_BYID);
		this.byprovincia = new URL("http://localhost:" + port + "/" + SERVICIO_BYPROVINCIA);
		this.bypoblacion = new URL("http://localhost:" + port + "/" + SERVICIO_BYPOBLACION);
	}

	@Test
	public void getAll() throws Exception {
		testLongitud(all, NUM_TOTAL_CASAS.intValue());
	}

	// Test devuelve la casa que se esperaba con un id dado
	@Test
	public void getById() throws Exception {
		ResponseEntity<CasaDto> response = template.getForEntity(byid.toString(), CasaDto.class);
		assertEquals(STATUS_OK, response.getStatusCode().toString());
		CasaDto casa = response.getBody();
		assertEquals(NOMBRE_CASA.toString(), casa.getNombre());
	}

	@Test
	public void getByProvincia() throws Exception {
		testLongitud(byprovincia, 8);
	}

	@Test
	public void getByPoblacion() throws Exception {
		testLongitud(bypoblacion, 2);
	}

	// Test total de registros igual al esperado
	private void testLongitud(URL url, int total) throws Exception {
		ResponseEntity<Object[]> response = template.getForEntity(url.toString(), Object[].class);

		assertEquals(STATUS_OK, response.getStatusCode().toString());
		Object[] objects = response.getBody();
		assertEquals(total, objects.length);
	}

}
