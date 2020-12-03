package houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import houseService.entity.Poblacion;
import houseService.repository.PoblacionRepository;
import houseService.service.PoblacionService;

@Service
public class PoblacionServiceImpl implements PoblacionService {

	@Autowired
	private PoblacionRepository poblaRepo;

	@Override
	public List<Poblacion> findByProvincia(String provincia) {
		//
		return poblaRepo.findByProvincia_provincia(provincia);
	}
	
	@Override
	public List<Poblacion> findAll() {
		//
		return poblaRepo.findAll();
	}
	
	
}
