package ruralnow.houseService.controller;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ruralnow.houseService.dto.PoblacionDto;
import ruralnow.houseService.dto.ProvinciaDto;
import ruralnow.houseService.entity.Poblacion;
import ruralnow.houseService.entity.Provincia;
import ruralnow.houseService.service.PoblacionService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/Poblacion")
public class PoblacionController {

	@Autowired
	PoblacionService poblaService;
	
	/** DozerMapper. */
    DozerBeanMapper mapper = new DozerBeanMapper();
    
    @RequestMapping(value = "/byProvincia/{provincia}", method = RequestMethod.GET)
    public List<PoblacionDto> byProvincia(@PathVariable("provincia") String provincia){
    	//
    	List<Poblacion> poblaciones = poblaService.findByProvincia(provincia);
    	List<PoblacionDto> poblacionesDto = new ArrayList<PoblacionDto>();
    	
    	if (poblaciones!= null) {
    		for (Poblacion poblacion : poblaciones) {
    			PoblacionDto poblacionDto = (PoblacionDto) mapper.map(poblacion, PoblacionDto.class);
    			poblacionesDto.add(poblacionDto);
    		}
    	}
    	
    	return poblacionesDto;
    }
    
    @RequestMapping(value="/getAll", method = RequestMethod.GET)
    public List<PoblacionDto> getAll(){
    	List<Poblacion> pros = poblaService.findAll();
    	List<PoblacionDto> prosDto = new ArrayList<PoblacionDto>();
    	
    	if (pros!=null) {
    		for (Poblacion pro : pros) {
    			PoblacionDto proDto = (PoblacionDto) mapper.map(pro, PoblacionDto.class);
    			prosDto.add(proDto);
    		}
    	}
    	
    	return prosDto;
    }
}
