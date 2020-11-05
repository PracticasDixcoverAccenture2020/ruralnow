package ruralnow.houseService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ruralnow.houseService.entity.Casa;
import ruralnow.houseService.service.CasaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/Casa"})
public class CasaController {

	@Autowired
	private CasaService casaService;
	
	/*
	 * Devuelve todas las casas
	 */
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public List<Casa> getAll() {
		return casaService.findAll();
	}
	
	@RequestMapping(value = "/byProvincia/{provincia}", method = RequestMethod.GET)
	public List<Casa> byProvincia(@PathVariable("provincia") String provincia) {
		return casaService.byProvincia(provincia);
	}
}
