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
package com.alibaba.nacos.client.naming.utils;

/**
 * @author xuanyin.zy
 */
public class UtilAndComs {

    public static final String VERSION = "Nacos-Java-Client:v1.0.1";

    public static String WEB_CONTEXT = "/nacos";

    public static String NACOS_URL_BASE = WEB_CONTEXT + "/v1/ns";

    public static String NACOS_URL_INSTANCE = NACOS_URL_BASE + "/instance";

    public static String NACOS_URL_SERVICE = NACOS_URL_BASE + "/com.yuanxiaoyuan.springcloudalibabafeign.service";

    public static final String ENCODING = "UTF-8";

    public static final String ENV_LIST_KEY = "envList";

    public static final String ALL_IPS = "000--00-ALL_IPS--00--000";

    public static final String FAILOVER_SWITCH = "00-00---000-VIPSRV_FAILOVER_SWITCH-000---00-00";

    public static final String DEFAULT_NAMESPACE_ID = "public";

    public static final int REQUEST_DOMAIN_RETRY_COUNT = 3;

    public static final String NACOS_NAMING_LOG_NAME = "com.alibaba.nacos.naming.log.filename";

    public static final String NACOS_NAMING_LOG_LEVEL = "com.alibaba.nacos.naming.log.level";

    public static final String SERVER_ADDR_IP_SPLITER = ":";

    public static final int DEFAULT_CLIENT_BEAT_THREAD_COUNT = Runtime.getRuntime()
        .availableProcessors() > 1 ? Runtime.getRuntime().availableProcessors() / 2
        : 1;

    public static final int DEFAULT_POLLING_THREAD_COUNT = Runtime.getRuntime()
        .availableProcessors() > 1 ? Runtime.getRuntime().availableProcessors() / 2
        : 1;
}
