package houseService.controller;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import houseService.dto.ProvinciaDto;
import houseService.entity.Provincia;
import houseService.service.ProvinciaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/Provincia")
public class ProvinciaController {

	@Autowired
	ProvinciaService proService;
	
	/** DozerMapper. */
    DozerBeanMapper mapper = new DozerBeanMapper();
    
    @RequestMapping(value="/getAll", method = RequestMethod.GET)
    public List<ProvinciaDto> getAll(){
    	List<Provincia> pros = proService.findAll();
    	List<ProvinciaDto> prosDto = new ArrayList<ProvinciaDto>();
    	
    	if (pros!=null) {
    		for (Provincia pro : pros) {
    			ProvinciaDto proDto = (ProvinciaDto) mapper.map(pro, ProvinciaDto.class);
    			prosDto.add(proDto);
    		}
    	}
    	
    	return prosDto;
    }
}
