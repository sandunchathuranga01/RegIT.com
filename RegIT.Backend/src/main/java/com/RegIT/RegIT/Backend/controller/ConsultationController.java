package com.RegIT.RegIT.Backend.controller;

import com.RegIT.RegIT.Backend.model.Consultation;
import com.RegIT.RegIT.Backend.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/consultation")
public class ConsultationController {
    @Autowired
    private ConsultationService consultationService;

    @PostMapping("/save")
    public String saveConsultationRequest(@RequestBody Consultation consultation){
        return consultationService.save(consultation);
    }
}
