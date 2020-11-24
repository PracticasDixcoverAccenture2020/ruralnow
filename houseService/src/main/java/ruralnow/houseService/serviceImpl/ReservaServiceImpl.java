package ruralnow.houseService.serviceImpl;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ruralnow.houseService.entity.Casa;
import ruralnow.houseService.entity.Reserva;
import ruralnow.houseService.repository.CasaRepository;
import ruralnow.houseService.repository.ReservaRepository;
import ruralnow.houseService.service.ReservaService;

@Service
public class ReservaServiceImpl implements ReservaService{

	@Autowired
	private ReservaRepository reservaRepo;	


	@Override
	public List<Reserva> findAll() {	

		List<Reserva> reservas = reservaRepo.findAll();
		return reservas; 
	}



	@Override
	public Reserva findById(Integer id) {

		Reserva reserva = reservaRepo.getOne(id);
		return reserva;
	}

	@Override
	public List<Reserva> findByCasa(Integer id) {

		return reservaRepo.findByIdCasa(id);
	}


	@Override
	public List<Date> diasReservados(Integer id) {

		List <Reserva> reservasCasa = findByCasa(id);

		List<Date> dates = new ArrayList<Date>();
		Calendar calendar = new GregorianCalendar();


		for (Reserva reserva : reservasCasa) {
			
			calendar.setTime(reserva.getFecha_inicio());

			while (calendar.getTime().before(reserva.getFecha_fin()))
			{
				Date result = calendar.getTime();
				dates.add(result);
				calendar.add(Calendar.DATE, 1);
			}
		}

		return dates;

	}

	@Override
	public Reserva crearReserva(Reserva reserva) {
		
		return reservaRepo.save(reserva);
	}

}
