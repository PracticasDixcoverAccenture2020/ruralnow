package ruralnow.houseService.controller;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ruralnow.houseService.dto.CasaDto;
import ruralnow.houseService.entity.Casa;
import ruralnow.houseService.service.CasaService;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/Casa"})
public class CasaController {

	@Autowired
	private CasaService casaService;
	
	/** DozerMapper. */
    DozerBeanMapper mapper = new DozerBeanMapper();
	
	/*
	 * Devuelve todas las casas
	 */
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public List<CasaDto> getAll() {
		List<Casa> casas = casaService.findAll();
		List<CasaDto> casasDto = new ArrayList<CasaDto>();
		
		if (casas != null)
    	{
    		for (Casa casa : casas) {
    			CasaDto casaDto = (CasaDto) mapper.map(casa, CasaDto.class);
    			casasDto.add(casaDto);
    		}

    	}
		
		return casasDto;
	}
	
	@RequestMapping(value = "/byProvincia/{provincia}", method = RequestMethod.GET)
	public List<CasaDto> byProvincia(@PathVariable("provincia") String provincia) {
		//
		List<Casa> casas = casaService.findByProvincia(provincia);
		List<CasaDto> casasDto = new ArrayList<CasaDto>();
		
		if(casas!=null)
		{
			for(Casa casa: casas) {
				CasaDto casaDto = (CasaDto) mapper.map(casa, CasaDto.class);
				casasDto.add(casaDto);
			}
		}
		
		return casasDto;
	}
}
