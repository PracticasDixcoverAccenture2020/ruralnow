package ruralnow.houseService.serviceImpl;

import java.util.Date;
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
	
	/*
	 * Retorna una lista de todas las casas existentes
	 */
	@Override
	public List<Casa> findAll() {
		
		List<Casa> casas = casaRepo.findAll();
		
		return casas; 
	}
	
	/*
	 * Devuelve la casa con el ID dado
	 */
	@Override
	public Casa findById(Integer id) {
		
		Casa casa = casaRepo.getOne(id);
		
		return casa;
	}
	
	/*
	 * Retorna una lista de todas las casas
	 * que hay en una determinada provincia
	 */
	@Override
	public List<Casa> findByProvincia(String provincia) {
		
		return casaRepo.findByProvincia(provincia);
	}
	
	/*
	 * Retorna una lista de todas las casas
	 * que hay en una población
	 */
	@Override
	public List<Casa> findByPoblacion_poblacion(String poblacion) {
		
		return casaRepo.findByPoblacion_poblacion(poblacion);
	}
	
	/*
	 * Retorna una lista de todas las casas
	 * que no están reservadas en una fecha
	 */
	@Override
	public List<Casa> findByReservaLibre(Date fecha) {
		
		return casaRepo.findByReservaLibre(fecha);
	}

}
