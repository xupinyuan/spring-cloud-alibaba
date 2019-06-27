package com.yuanxiaoyuan.springcloudalibabafeign.service.fallback;

import com.yuanxiaoyuan.springcloudalibabafeign.service.FeignService;
import org.springframework.stereotype.Component;

@Component
public class FeignServiceFallback implements FeignService {

    @Override
    public String hello(String message) {
        return "sentinel 熔断触发";
    }
}
