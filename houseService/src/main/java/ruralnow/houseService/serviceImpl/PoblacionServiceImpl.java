package ruralnow.houseService.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ruralnow.houseService.entity.Poblacion;
import ruralnow.houseService.repository.PoblacionRepository;
import ruralnow.houseService.service.PoblacionService;

@Service
public class PoblacionServiceImpl implements PoblacionService {

	@Autowired
	private PoblacionRepository poblaRepo;

	@Override
	public List<Poblacion> findByProvincia(String provincia) {
		//
		return poblaRepo.findByProvincia_provincia(provincia);
	}
	
	
}
