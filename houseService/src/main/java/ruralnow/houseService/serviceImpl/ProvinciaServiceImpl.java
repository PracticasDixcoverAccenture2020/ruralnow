package ruralnow.houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ruralnow.houseService.entity.Provincia;
import ruralnow.houseService.repository.ProvinciaRepository;
import ruralnow.houseService.service.ProvinciaService;

@Service
public class ProvinciaServiceImpl implements ProvinciaService {
	
	@Autowired
	private ProvinciaRepository proRepo;
	
	/*
	 * Devuelve todas las provincias
	 */
	@Override
	public List<Provincia> findAll() {
		//
		return proRepo.findAll();
	}

	

}
