package com.RegIT.RegIT.Backend.Impl;

import com.RegIT.RegIT.Backend.model.Subscribe;
import com.RegIT.RegIT.Backend.repo.SubscribeUserRepo;
import com.RegIT.RegIT.Backend.service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscribeServiceImpl implements SubscribeService {
    @Autowired
    private SubscribeUserRepo subscribeUserRepo;
    @Override
    public String save(Subscribe subscribe) {


        return subscribeUserRepo.save(subscribe).getId();
    }
}
