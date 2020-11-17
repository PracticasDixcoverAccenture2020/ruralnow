package ruralnow.houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ruralnow.houseService.entity.Servicio;
import ruralnow.houseService.repository.ServicioRepository;
import ruralnow.houseService.service.ServicioService;

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
