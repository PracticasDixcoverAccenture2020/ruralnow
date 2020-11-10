package ruralnow.houseService.service;

import java.util.List;

import ruralnow.houseService.entity.Casa;

public interface CasaService {
	
	public List<Casa> findAll();
	public List<Casa> findByProvincia(String nombre);

}
