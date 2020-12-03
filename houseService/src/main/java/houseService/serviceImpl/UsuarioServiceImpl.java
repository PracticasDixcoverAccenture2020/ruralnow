package houseService.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import houseService.entity.Usuario;
import houseService.repository.UsuarioRepository;
import houseService.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepo;

	@Override
	public Usuario findById(Integer id) {
		Usuario usuario = usuarioRepo.getOne(id);
		return usuario;
	}



}
