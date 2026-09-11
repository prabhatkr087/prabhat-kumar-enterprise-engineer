package com.raysoft.portfolio.controller;

/*
 **
 * Description: PortfolioController class
 * @author Prabhat Kumar
 * @since 10 September 2026
 */

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class PortfolioController {
	@GetMapping("/")
    public String home(Model model) {

        model.addAttribute(
                "name",
                "Prabhat Kumar"
        );

        model.addAttribute(
                "role",
                "Senior Enterprise Software Engineer III"
        );

        model.addAttribute(
                "experience",
                "9+"
        );

        model.addAttribute(
                "specialization",
                "Salesforce + Java + Enterprise Integration"
        );

        return "index";
    }
	
}
