/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.nacos.api.naming;

import com.alibaba.nacos.api.exception.NacosException;
import com.alibaba.nacos.api.naming.pojo.Instance;
import com.alibaba.nacos.api.naming.pojo.Service;
import com.alibaba.nacos.api.selector.AbstractSelector;

import java.util.Map;

/**
 * Operations related to Nacos
 *
 * @author liaochuntao
 * @since 1.0.1
 */
public interface NamingMaintainService {

    /**
     * update instance info
     *
     * @param serviceName
     * @param instance
     * @throws NacosException
     */
    void updateInstance(String serviceName, Instance instance) throws NacosException;

    /**
     * update instance info
     *
     * @param serviceName
     * @param groupName
     * @param instance
     * @throws NacosException
     */
    void updateInstance(String serviceName, String groupName, Instance instance) throws NacosException;

    /**
     * query com.yuanxiaoyuan.springcloudalibabafeign.service
     *
     * @param serviceName
     * @return
     * @throws NacosException
     */
    Service queryService(String serviceName) throws NacosException;

    /**
     * query com.yuanxiaoyuan.springcloudalibabafeign.service
     *
     * @param serviceName
     * @param groupName
     * @return
     * @throws NacosException
     */
    Service queryService(String serviceName, String groupName) throws NacosException;

    /**
     * create com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @throws NacosException
     */
    void createService(String serviceName) throws NacosException;

    /**
     * create com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName   group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @throws NacosException
     */
    void createService(String serviceName, String groupName) throws NacosException;

    /**
     * create com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName           name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName             group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param protectThreshold      protectThreshold of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @throws NacosException
     */
    void createService(String serviceName, String groupName, float protectThreshold) throws NacosException;

    /**
     * create com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName       name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName         group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param protectThreshold  protectThreshold of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param expression        expression of selector
     * @throws NacosException
     */
    void createService(String serviceName, String groupName, float protectThreshold, String expression) throws NacosException;

    /**
     * create com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param service   name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param selector  selector
     * @throws NacosException
     */
    void createService(Service service, AbstractSelector selector) throws NacosException;

    /**
     * delete com.yuanxiaoyuan.springcloudalibabafeign.service from Nacos
     *
     * @param serviceName name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @return if delete com.yuanxiaoyuan.springcloudalibabafeign.service success return true
     * @throws NacosException
     */
    boolean deleteService(String serviceName) throws NacosException;

    /**
     * delete com.yuanxiaoyuan.springcloudalibabafeign.service from Nacos
     *
     * @param serviceName name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName   group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @return if delete com.yuanxiaoyuan.springcloudalibabafeign.service success return true
     * @throws NacosException
     */
    boolean deleteService(String serviceName, String groupName) throws NacosException;

    /**
     * update com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName       name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName         group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param protectThreshold  protectThreshold of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @throws NacosException
     */
    void updateService(String serviceName, String groupName, float protectThreshold) throws NacosException;

    /**
     * update com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos
     *
     * @param serviceName       name of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param groupName         group of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param protectThreshold  protectThreshold of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param metadata          metadata of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @throws NacosException
     */
    void updateService(String serviceName, String groupName, float protectThreshold, Map<String, String> metadata) throws NacosException;

    /**
     * update com.yuanxiaoyuan.springcloudalibabafeign.service to Nacos with selector
     *
     * @param service    {@link Service} pojo of com.yuanxiaoyuan.springcloudalibabafeign.service
     * @param selector   {@link AbstractSelector} pojo of selector
     * @throws NacosException
     */
    void updateService(Service service, AbstractSelector selector) throws NacosException;

}
