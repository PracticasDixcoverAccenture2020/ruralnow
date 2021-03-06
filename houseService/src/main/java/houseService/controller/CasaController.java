package houseService.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import houseService.dto.CasaDto;
import houseService.entity.Casa;
import houseService.service.CasaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/Casa" })
public class CasaController {
	
	private static final Logger LOGGER = Logger.getLogger( CasaController.class.getName() );


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

		if (casas != null) {
			for (Casa casa : casas) {
				CasaDto casaDto = mapping(casa);
				casasDto.add(casaDto);
			}

		}

		return casasDto;
	}

	/*
	 * Devuelve la casa con el id correspondiente
	 */
	@RequestMapping(value = "/byId/{id}", method = RequestMethod.GET)
	public CasaDto byId(@PathVariable("id") Integer id) {
		try {
			Casa casa = casaService.findById(id);
			CasaDto casaDto = new CasaDto();

			if (casa.getIdcasa() != 0) {
				casaDto = mapping(casa);
			}
			
			return casaDto;

		} catch (Exception e) {
			LOGGER.log(Level.SEVERE, e.getMessage());
			return new CasaDto();
		}
	}

	/*
	 * Devuelve todas las casas que hay en una provincia
	 */
	@RequestMapping(value = "/byProvincia/{provincia}", method = RequestMethod.GET)
	public List<CasaDto> byProvincia(@PathVariable("provincia") String provincia) {
		//
		List<Casa> casas = casaService.findByProvincia(provincia);
		List<CasaDto> casasDto = new ArrayList<CasaDto>();

		if (casas != null) {
			for (Casa casa : casas) {
				CasaDto casaDto = mapping(casa);
				casasDto.add(casaDto);
			}
		}

		return casasDto;
	}

	/*
	 * Devuelve todas las casas que hay en una poblacion
	 */
	@RequestMapping(value = "/byPoblacion/{poblacion}", method = RequestMethod.GET)
	public List<CasaDto> byPoblacion(@PathVariable("poblacion") String poblacion) {
		//
		List<Casa> casas = casaService.findByPoblacion_poblacion(poblacion);
		List<CasaDto> casasDto = new ArrayList<CasaDto>();

		if (casas != null) {
			for (Casa casa : casas) {
				CasaDto casaDto = mapping(casa);
				casasDto.add(casaDto);
			}
		}

		return casasDto;
	}

	/*
	 * Devuelve todas las casas que no están reservadas para una fecha
	 */
	@RequestMapping(value = "/reserva/{fecha}", method = RequestMethod.GET)
	public List<CasaDto> findByReservaLibre(@PathVariable("fecha") String fecha) {
		//
		Date fechaDate;
		try {
			fechaDate = new SimpleDateFormat("yyyy-MM-dd").parse(fecha);
		} catch (ParseException e) {
			e.printStackTrace();
			fechaDate = new Date();
		}
		List<Casa> casas = casaService.findByReservaLibre(fechaDate);
		List<CasaDto> casasDto = new ArrayList<CasaDto>();

		if (casas != null) {
			for (Casa casa : casas) {
				CasaDto casaDto = mapping(casa);
				casasDto.add(casaDto);
			}
		}

		return casasDto;
	}
	
	private CasaDto mapping(Casa casa) {
		
		 CasaDto casaDto = (CasaDto) mapper.map(casa, CasaDto.class);	
		 
		 casaDto.setUsuarioId(casa.getUsuario().getIdusuario());
		 
		 return casaDto;
	}
}
