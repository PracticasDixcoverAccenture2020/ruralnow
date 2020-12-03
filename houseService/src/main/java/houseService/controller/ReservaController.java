package houseService.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.LogRecord;
import java.util.logging.Logger;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import ch.qos.logback.classic.Level;
import houseService.dto.ReservaDto;
import houseService.entity.Reserva;
import houseService.service.EmailService;
import houseService.service.ReservaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/Reserva" })
public class ReservaController {
	
	private static final Logger LOGGER = Logger.getLogger( ReservaController.class.getName() );


	@Autowired
	private ReservaService reservaService;


	@Autowired
	private EmailService emailService;

	DozerBeanMapper mapper = new DozerBeanMapper();

	/**
	 * Devuelve todas las reservas
	 * 
	 * @return reservasDto
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

	/**
	 * Devuelve la reserva del id correspondiente
	 * 
	 * @param id
	 * @return reservaDto
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
			LOGGER.log(null, e.getMessage());
			return new ReservaDto();
		}
	}

	/**
	 * Esta funcion devuelve los dias que en una casa ya estan reservados
	 * 
	 * @param idCasa
	 * @return diasOcupados
	 */
	@RequestMapping(value = "/casa/{idCasa}", method = RequestMethod.GET)
	public List<Date> getFechasOcupadas(@PathVariable Integer idCasa) {

		List<Date> diasOcupados = new ArrayList<Date>();
		
		try {
			
			diasOcupados = reservaService.diasReservados(idCasa);

		} catch (Exception e) {
			LogRecord l = null;
			LOGGER.log(l.getLevel(), e.getMessage());
			diasOcupados.clear();

		}		
		return diasOcupados;
	}

	/**
	 * Guarda una reserva nueva y envia un mail de confirmacion
	 * 
	 * @param Reserva reserva
	 * @param String  email
	 * @param int     totalNoches
	 */
	@RequestMapping(value = "/crearReserva", method = RequestMethod.POST)
	public void crearReserva(@RequestBody String reservaJSON) {

		try {
			ReservaDto reservaDto = new ObjectMapper().readValue(reservaJSON, ReservaDto.class);
			
			if (reservaDto != null) {
				
				Reserva reserva;
				reserva = (Reserva) mapper.map(reservaDto, Reserva.class);

				int totalNoches = reservaDto.getImporte() / reservaDto.getCasa().getPrecio_noche();

				emailService.sendMailWithInlineResources(reserva.getUsuario().getEmail(),
														"Reserva Confirmada",
														reserva.getCasa().getNombre(),
														reserva.getCasa().getPrecio_noche(),
														reserva.getImporte(), totalNoches);
				
				reservaService.crearReserva(reserva);
			}



		} catch (Exception e) {
			LOGGER.log(null, e.getMessage());
		}
	}


}
