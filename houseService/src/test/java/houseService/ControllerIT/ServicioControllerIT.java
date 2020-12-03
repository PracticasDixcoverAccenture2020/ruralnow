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
public class ServicioControllerIT {

	@LocalServerPort
	private int port;

	private URL getall;

	@Autowired
	private TestRestTemplate template;

	private final String SERVICIO_GETALL= "Servicio/getAll";

	private final String STATUS_OK = "200 OK";

	@Before
	public void setUp() throws Exception {
	     this.getall = new URL("http://localhost:" + port + "/"+ SERVICIO_GETALL);
	}
	
	@Test
	public void getAll() throws Exception {
		ResponseEntity<Object[]> response = template.getForEntity(getall.toString(), Object[].class);

		assertEquals(STATUS_OK, response.getStatusCode().toString());
		Object[] objects = response.getBody();
		assertEquals(7, objects.length);
	}
}
