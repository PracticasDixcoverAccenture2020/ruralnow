package houseService.service;

public interface EmailService{

	public void sendMail(String to, String subject, String body);

	public void sendPreConfiguredMail(String message);
	
	public void sendMailWithInlineResources(String to, String subject, String fileToAttach);

}