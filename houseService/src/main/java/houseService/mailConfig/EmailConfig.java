package houseService.mailConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
 
@Configuration
public class EmailConfig 
{
    @Bean
    public SimpleMailMessage emailTemplate()
    {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("kini151234@gmail.com");
        message.setFrom("ruralnow@outlook.com");
        message.setSubject("Important email");
        message.setText("Mini es una gata tope guapa y por eso la queremos todos juju");
        return message;
    }
}