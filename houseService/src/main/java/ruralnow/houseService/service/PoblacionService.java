package ruralnow.houseService.service;

import java.util.List;

import ruralnow.houseService.entity.Poblacion;

public interface PoblacionService {

	public List<Poblacion> findByProvincia(String provincia);

	public List<Poblacion> findAll();
}
