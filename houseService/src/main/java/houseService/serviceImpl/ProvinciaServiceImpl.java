package houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import houseService.entity.Provincia;
import houseService.repository.ProvinciaRepository;
import houseService.service.ProvinciaService;

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
