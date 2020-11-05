package ruralnow.houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ruralnow.houseService.entity.Casa;
import ruralnow.houseService.repository.CasaRepository;
import ruralnow.houseService.service.CasaService;

@Service
public class CasaServiceImpl implements CasaService {
	
	@Autowired
	private CasaRepository casaRepo;
	
	@Override
	public List<Casa> findAll() {
		
		return casaRepo.findAll();
	}
	
	/*
	 * Retorna una lista de todas las casas
	 * que hay en una determinada provincia
	 */
	@Override
	public List<Casa> byProvincia(String provincia) {
		return casaRepo.findByProvincia(provincia);
	}

}
