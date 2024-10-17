package com.RegIT.RegIT.Backend.controller;

import com.RegIT.RegIT.Backend.model.Subscribe;
import com.RegIT.RegIT.Backend.service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/subscribe")
public class SubscribeController {
    @Autowired
    private SubscribeService subscribeService;

    @PostMapping("/save")
    public String saveSubscribeUser(@RequestBody Subscribe subscribe){
        return subscribeService.save(subscribe);

    }
}
