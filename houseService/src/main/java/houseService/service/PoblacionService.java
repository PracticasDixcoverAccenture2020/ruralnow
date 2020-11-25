package houseService.service;

import java.util.List;

import houseService.entity.Poblacion;

public interface PoblacionService {

	public List<Poblacion> findByProvincia(String provincia);

	public List<Poblacion> findAll();
}
