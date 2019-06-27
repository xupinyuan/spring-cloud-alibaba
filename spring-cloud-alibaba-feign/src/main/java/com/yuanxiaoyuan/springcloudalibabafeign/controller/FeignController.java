package com.yuanxiaoyuan.springcloudalibabafeign.controller;

import com.yuanxiaoyuan.springcloudalibabafeign.service.FeignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeignController {

    @Autowired
    private FeignService feignService;

    @RequestMapping("helloFeign/{message}")
    public String helloFeign(@PathVariable("message") String message){
        return  feignService.hello(message);
    }
}
