package houseService.controller;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import houseService.dto.ServicioDto;
import houseService.entity.Servicio;
import houseService.service.ServicioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/Servicio"})
public class ServicioController {
	
	@Autowired
	private ServicioService servicioService;
	
	/** DozerMapper. */
    DozerBeanMapper mapper = new DozerBeanMapper();
    
    /*
	 * Devuelve todos los servicios
	 */
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<ServicioDto> getAll() {
    	List<Servicio> servicios = servicioService.findAll();
    	List<ServicioDto> serviciosDto = new ArrayList<ServicioDto>();
    	
    	if (servicios != null)
    	{
    		for (Servicio serv: servicios) {
    			ServicioDto servDto = (ServicioDto) mapper.map(serv, ServicioDto.class);
    			serviciosDto.add(servDto);
    		}
    	}
    	
    	return serviciosDto;
    }

}
