package com.RegIT.RegIT.Backend.Impl;

import com.RegIT.RegIT.Backend.model.Consultation;
import com.RegIT.RegIT.Backend.repo.ConsultationRepo;
import com.RegIT.RegIT.Backend.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsultationServiceImpl implements ConsultationService {
    @Autowired
    private ConsultationRepo consultationRepo;
    @Override
    public String save(Consultation consultation) {
        return consultationRepo.save(consultation).getId();
    }
}
