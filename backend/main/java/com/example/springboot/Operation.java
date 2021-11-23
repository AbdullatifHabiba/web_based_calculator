package com.example.springboot;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Component;
@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/oprtion")

public class Operation {
	@GetMapping("/calc")
	
	public String calc(@RequestParam String x ,@RequestParam String op ,@RequestParam String y ) {
		boolean corop=false;
		
		double first=Double.parseDouble(x);
		double second=Double.parseDouble(y);
        double output=0;
        


		switch(op) 
		{
		case"plus":output=first+second;break;
		
		case"-":output=first-second;break;
		case"*":output=first*second;break;

		case"/":
			if(second==0) {corop=true;break;}
			
			output=first/second;break;
		

		
		
		}
		if(corop)return("Error");
		return String.valueOf(output);
		
		
		
		
	}
	@GetMapping("/single")
	public String single(@RequestParam String x ,@RequestParam String op ) {
		double first=0;
	
		first=Double.parseDouble(x);

		
		

        double output=0;
		boolean corop=false;
		switch(op) 
		{

			
		case"%":output=first/100.0;break;
		case "\u221A":if(first<0) {corop=true;break;}output=Math.sqrt(first);break;
		case "1/x":if(first==0) {corop=true;break;}
		                      output=1/first;break;
		case "/-":output=-1*first;break;
		case"x^2":output=Math.pow(first,2);
break;
		default:
			return"ERROR";
		
		}
		
		if(corop)return("Error");
		return String.valueOf(output);
	}



}
