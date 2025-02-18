package com.gearing.server.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HelloWorldController {

    @GetMapping("/helloworld")
    public String helloworld() {
        return "Hello World!";
    }
}
