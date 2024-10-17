package com.RegIT.RegIT.Backend.repo;

import com.RegIT.RegIT.Backend.model.Consultation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultationRepo extends MongoRepository<Consultation,String> {
}
