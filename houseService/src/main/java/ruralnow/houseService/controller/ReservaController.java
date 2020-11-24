package ruralnow.houseService.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ruralnow.houseService.dto.ReservaDto;
import ruralnow.houseService.entity.Reserva;
import ruralnow.houseService.service.ReservaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/Reserva" })
public class ReservaController {

	@Autowired
	private ReservaService reservaService;

	/** DozerMapper. */
	DozerBeanMapper mapper = new DozerBeanMapper();

	/*
	 * Devuelve todas las reservas
	 */
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public List<ReservaDto> getAll() {
		List<Reserva> reservas = reservaService.findAll();
		List<ReservaDto> reservasDto = new ArrayList<ReservaDto>();

		if (reservas != null) {
			for (Reserva reserva : reservas) {
				ReservaDto reservaDto = (ReservaDto) mapper.map(reserva, ReservaDto.class);
				reservasDto.add(reservaDto);
			}
		}
		return reservasDto;
	}

	/*
	 * Devuelve la reserva con el id correspondiente
	 */
	@RequestMapping(value = "/byId/{id}", method = RequestMethod.GET)
	public ReservaDto byId(@PathVariable("id") Integer id) {

		try {
			Reserva reserva = reservaService.findById(id);
			ReservaDto reservaDto = new ReservaDto();

			if (reserva.getId() != 0) {
				reservaDto = (ReservaDto) mapper.map(reserva, ReservaDto.class);
			}

			return reservaDto;

		} catch (Exception e) {
			System.out.println(e);
			return new ReservaDto();
		}
	}
	
	
	
	/**
	 * 
	 * @return
	 */
	@RequestMapping(value = "/casa/{idCasa}", method = RequestMethod.GET)
	public List<Date> getFechasOcupadas(@PathVariable Integer idCasa){
		
		try {
			List<Date> diasOcupados = reservaService.diasReservados(idCasa);		

			return diasOcupados;

		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
		

	}


}
