package com.emp.manag.config;

<<<<<<< HEAD
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
=======
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
>>>>>>> f759ccff23d20de1a3e7334cfca05632bc51aea1

@Configuration
public class CorsConfig {

<<<<<<< HEAD
    @Bean
    WebMvcConfigurer corsConfigurer() {

        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {

                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("*")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
=======
	private final CorsProperties corsProperties;

	public CorsConfig(CorsProperties corsProperties) {
		this.corsProperties = corsProperties;
	}

	@Bean
	public CorsFilter corsFilter() {

		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedOrigins(corsProperties.getAllowedOrigins());
		config.setAllowedMethods(corsProperties.getAllowedMethods());
		config.setAllowedHeaders(corsProperties.getAllowedHeaders());
		config.setAllowCredentials(corsProperties.isAllowCredentials());
		config.setMaxAge(corsProperties.getMaxAge());

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/api/**", config);

		return new CorsFilter(source);
	}
}
>>>>>>> f759ccff23d20de1a3e7334cfca05632bc51aea1
