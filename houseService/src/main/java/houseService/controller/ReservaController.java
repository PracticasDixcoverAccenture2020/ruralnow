package houseService.controller;

import java.time.Instant;
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

import houseService.dto.CasaDto;
import houseService.dto.ReservaDto;
import houseService.entity.Casa;
import houseService.entity.Reserva;
import houseService.service.CasaService;
import houseService.service.EmailService;
import houseService.service.ReservaService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/Reserva" })
public class ReservaController {

	@Autowired
	private ReservaService reservaService;
	

	@Autowired
	private CasaService casaService;


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
			System.out.println(e);
			return new ReservaDto();
		}
	}



	/**
	 * Esta funcion devuelve los dias que en una casa ya estan reservados
	 * @param idCasa
	 * @return diasOcupados
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


	/**
	 * Guarda una reserva nueva y envia un mail de confirmacion
	 * @param Reserva reserva
	 * @param String email
	 * @param int totalNoches
	 */
	@RequestMapping(value = "/crearReserva/{email}/{totalNoches}/{reserva}", method = RequestMethod.GET)
	public void crearReserva(@PathVariable String email, 
							@PathVariable("totalNoches") int totalNoches,  
							@PathVariable("reserva") ReservaDto reservaDto){	
		
		try {	
			
			if(reservaDto != null) {		
				
				
				Reserva reserva = new Reserva();
				reserva = (Reserva) mapper.map(reservaDto, Reserva.class);				
				
				emailService.sendMailWithInlineResources(email, "Reserva Confirmada",
														reserva.getCasa().getNombre(), 
														reserva.getCasa().getPrecio_noche(),
														reserva.getImporte(),
														totalNoches);				
			}		  

		} catch (Exception e) { System.out.println(e); }
	}

}
