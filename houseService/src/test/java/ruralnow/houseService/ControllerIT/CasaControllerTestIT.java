package ruralnow.houseService.ControllerIT;

import static org.junit.Assert.assertEquals;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CasaControllerTestIT {

	@LocalServerPort
	private int port;

	private URL all;
	private URL byprovincia;
	private URL bypoblacion;

	@Autowired
	private TestRestTemplate template;

	private final String SERVICIO_ALL = "Casa/getAll/";
	private final String SERVICIO_BYPROVINCIA= "Casa/byProvincia/Málaga";
	private final String SERVICIO_BYPOBLACION= "Casa/byPoblacion/Antequera";

	private final String STATUS_OK = "200 OK";
	private final Integer NUM_TOTAL_CASAS = 9;

	@Before
	public void setUp() throws Exception {
	     this.all = new URL("http://localhost:" + port + "/"+ SERVICIO_ALL);
	     this.byprovincia = new URL("http://localhost:" + port + "/"+ SERVICIO_BYPROVINCIA);
	     this.bypoblacion = new URL("http://localhost:" + port + "/"+ SERVICIO_BYPOBLACION);
	}
	
	@Test
	public void getAll() throws Exception {


	     ResponseEntity<Object[]> response = template.getForEntity(all.toString(), Object[].class);
	     
	     assertEquals(STATUS_OK, response.getStatusCode().toString());
	     Object[] objects = response.getBody();
	     assertEquals(NUM_TOTAL_CASAS.intValue(), objects.length);

	 }
	
	@Test
	public void getByProvincia() throws Exception {


	     ResponseEntity<Object[]> response = template.getForEntity(byprovincia.toString(), Object[].class);
	     
	     assertEquals(STATUS_OK, response.getStatusCode().toString());
	     Object[] objects = response.getBody();
	     assertEquals(8, objects.length);

	 }
	
	@Test
	public void getByPoblacion() throws Exception {


	     ResponseEntity<Object[]> response = template.getForEntity(bypoblacion.toString(), Object[].class);
	     
	     assertEquals(STATUS_OK, response.getStatusCode().toString());
	     Object[] objects = response.getBody();
	     assertEquals(2, objects.length);

	 }

}
