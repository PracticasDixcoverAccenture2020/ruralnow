package ruralnow.houseService.ControllerIT;

import java.net.URL;

import org.dozer.DozerBeanMapper;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ReservaControllerIT {
	
	/** DozerMapper. */
	DozerBeanMapper mapper = new DozerBeanMapper();

	@LocalServerPort
	private int port;

	private URL all;
	private URL byid;
	private URL fechasOcupadas;
	
	@Autowired
	private TestRestTemplate template;
	
	private final String SERVICIO_ALL = "Reserva/getAll/";
	private final String SERVICIO_BYID = "Reserva/byId/1";
	private final String SERVICIO_BYIDCASA = "Reserva/casa/2";

}
