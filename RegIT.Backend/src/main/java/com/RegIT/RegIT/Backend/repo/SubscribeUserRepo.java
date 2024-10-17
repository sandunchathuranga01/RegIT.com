package com.RegIT.RegIT.Backend.repo;

import com.RegIT.RegIT.Backend.model.Subscribe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeUserRepo extends MongoRepository<Subscribe,String> {
}
