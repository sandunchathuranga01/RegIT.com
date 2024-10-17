package com.RegIT.RegIT.Backend.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collation = "SubscribeUsers")
public class Subscribe {
    @Id
    private String id;
    private String emailAddress;
}
