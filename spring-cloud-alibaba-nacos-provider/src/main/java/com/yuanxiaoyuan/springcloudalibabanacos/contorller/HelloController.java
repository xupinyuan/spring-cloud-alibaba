package com.yuanxiaoyuan.springcloudalibabanacos.contorller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HelloController {

    @Value("${server.port}")
    private String port;

    @RequestMapping("hello/{message}")
    public String helloMessage(@PathVariable("message") String message, HttpServletRequest request){
        return "hello:"+request.getLocalPort()+message;
    }
}
