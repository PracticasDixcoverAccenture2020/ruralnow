package ruralnow.houseService.service;

import java.util.Date;
import java.util.List;

import ruralnow.houseService.entity.Reserva;

public interface ReservaService {	
	
	public List<Reserva> findAll();
	public Reserva findById(Integer id);
	public List<Date> diasReservados(Integer id);
	public Reserva crearReserva(Reserva reserva);
	public List<Reserva> findByCasa(Integer id);
	
}
