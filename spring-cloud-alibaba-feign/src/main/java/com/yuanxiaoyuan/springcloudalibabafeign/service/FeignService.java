package com.yuanxiaoyuan.springcloudalibabafeign.service;

import com.yuanxiaoyuan.springcloudalibabafeign.service.fallback.FeignServiceFallback;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "spring-cloud-alibaba-nacos-provider" ,fallback = FeignServiceFallback.class)
public interface FeignService {

    @GetMapping(value = "/hello/{message}")
    String hello(@PathVariable("message") String message);
}
