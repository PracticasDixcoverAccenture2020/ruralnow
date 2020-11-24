package houseService.service;

import java.util.Date;
import java.util.List;

import houseService.entity.Casa;

public interface CasaService {
	
	public List<Casa> findAll();
	public Casa findById(Integer id);
	public List<Casa> findByProvincia(String nombre);
	public List<Casa> findByPoblacion_poblacion(String poblacion);
	public List<Casa> findByReservaLibre(Date fecha);

}
