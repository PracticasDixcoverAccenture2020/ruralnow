package houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import houseService.entity.Servicio;
import houseService.repository.ServicioRepository;
import houseService.service.ServicioService;

@Service
public class ServicioServiceImpl implements ServicioService {
	
	@Autowired
	private ServicioRepository servicioRepo;

	@Override
	public List<Servicio> findAll() {
		List<Servicio> servicios = servicioRepo.findAll();
		return servicios;
	}

}
