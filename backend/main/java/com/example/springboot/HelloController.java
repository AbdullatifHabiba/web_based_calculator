package com.example.springboot;

import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Component;

@RestController
public class HelloController {

	/*@GetMapping("/")
	public String index() {
		return "welcome Abdullatif Khalid";
	}*/

	@GetMapping("/{name}")
	public String hello(@PathVariable String name ) {
		return String.format("welcome %s to my calculator", name);
	}
}