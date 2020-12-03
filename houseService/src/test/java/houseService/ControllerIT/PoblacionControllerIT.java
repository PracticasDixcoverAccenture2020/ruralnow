package houseService.ControllerIT;

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
public class PoblacionControllerIT {

	@LocalServerPort
	private int port;

	private URL getbyprovincia;

	@Autowired
	private TestRestTemplate template;

	private final String SERVICIO_BYPROVINCIA= "Poblacion/byProvincia/Málaga";

	private final String STATUS_OK = "200 OK";

	@Before
	public void setUp() throws Exception {
	     this.getbyprovincia = new URL("http://localhost:" + port + "/"+ SERVICIO_BYPROVINCIA);
	}

	@Test
	public void getByProvincia() throws Exception {


	     ResponseEntity<Object[]> response = template.getForEntity(getbyprovincia.toString(), Object[].class);
	     
	     assertEquals(STATUS_OK, response.getStatusCode().toString());
	     Object[] objects = response.getBody();
	     assertEquals(102, objects.length);

	 }
}
