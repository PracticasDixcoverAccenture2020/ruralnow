package houseService.serviceImpl;

import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import houseService.service.EmailService;


@Service
public class EmailServiceImpl implements EmailService{

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
	public void sendMailWithInlineResources(String to, String subject, String mensaje) {

		MimeMessagePreparator preparator = new MimeMessagePreparator() 
		{
			public void prepare(MimeMessage mimeMessage) throws Exception 
			{
				
				MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "utf-8");
				String htmlMsg = new String(Files.readAllBytes(Paths.get("./assets/Template.html")), StandardCharsets.UTF_8)
					.replace("{{first_name}}", mensaje);
				
				helper.setText(htmlMsg, true);;
				helper.setTo(to);
				helper.setSubject(subject);
				helper.setFrom("ruralnowcompany@gmail.com");
				FileSystemResource res = new FileSystemResource(new File("./assets/ruralnowlodomail.png"));
	            helper.addInline("ruralnowlogo", res);
	            
				mailSender.send(mimeMessage);
			}


		};

		try {
			mailSender.send(preparator);
		}
		catch (MailException ex) {
			// simply log it and go on...
			System.err.println(ex.getMessage());
		}

	}

}
