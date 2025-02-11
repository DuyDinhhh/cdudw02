package com.rainbowforest.orderservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Vô hiệu hóa CSRF nếu không sử dụng
            .authorizeRequests()
            .antMatchers("/cart/**", "/order/**").permitAll() // Cho phép tất cả yêu cầu đến /cart
            .anyRequest().authenticated(); // Các endpoint khác vẫn yêu cầu xác thực
    }
}

