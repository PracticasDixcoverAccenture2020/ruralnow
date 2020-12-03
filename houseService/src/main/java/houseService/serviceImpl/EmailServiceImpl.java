package houseService.serviceImpl;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import houseService.controller.ReservaController;
import houseService.service.EmailService;


@Service
public class EmailServiceImpl implements EmailService{
	
	private static final Logger LOGGER = Logger.getLogger( EmailServiceImpl.class.getName() );


	@Autowired
	private JavaMailSender mailSender;


	@Autowired
	private SimpleMailMessage preConfiguredMessage;


	@Override
	public void sendMail(String to, String subject, String body) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(subject);
		message.setText(body);
		mailSender.send(message);
	}

	@Override
	public void sendPreConfiguredMail(String message) {

		SimpleMailMessage mailMessage = new SimpleMailMessage(preConfiguredMessage);
		mailMessage.setText(message);
		mailSender.send(mailMessage);

	}



	@Override
	public void sendMailWithInlineResources(String to, String subject, String nombreCasa,
			int precioNoche, int totalPrecio, int totalNoches) {

		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			public void prepare(MimeMessage mimeMessage) throws Exception {		

				MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "utf-8");
				String htmlMsg = new String(Files.readAllBytes(Paths.get("./assets/Template.html")),
						StandardCharsets.UTF_8)
						.replace("{{first_name}}", to)
						.replace("{{nombre_casa}}", nombreCasa)
						.replace("{{precio_noche}}", precioNoche + "")
						.replace("{{precio_total}}", totalPrecio + "")
						.replace("{{total_noches}}", totalNoches + "");


				helper.setText(htmlMsg, true);;
				helper.setTo(to);
				helper.setSubject(subject);
				helper.setFrom("RuralNow");
				FileSystemResource res = new FileSystemResource(new File("./assets/ruralnowlodomail.png"));
				helper.addInline("ruralnowlogo", res);
				mailSender.send(mimeMessage);
			}
		};

		try {
			mailSender.send(preparator);
		}
		catch (MailException ex) {
			LOGGER.log(Level.SEVERE, ex.getMessage());
		}

	}

}
