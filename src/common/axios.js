/*
 * @Descripttion: axios封装
 * @version: v0.0.1
 * @Author: xdh.ss
 * @Date: 2020-04-13 11:19:21
 * @LastEditors: xdh.ss
 * @LastEditTime: 2020-04-13 12:20:59
 */
import {Message} from 'element-ui';
import axios from 'axios';
import store from '../store';
import router from '../router/index';
import {date2String, stringDateExtend} from '../../lib/tools.js';
import {removeToken, removeUserInfo, getToken} from '../../lib/auth';

let src = `http://${location.hostname}:${location.port}/`

const instance = axios.create({
    baseURL: src,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
    }
})
// 添加请求拦截器
instance.interceptors.request.use(config => {
    // if ((store.getters.token === null || !store.getters.token) && config.url != src + "/sso/login/login") {
    //
    // }
    config.headers['Authorization'] = config.token || getToken();
    config.data&&date2String(config.data);

    return config;
}, err => {
    return Promise.reject(err)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
    let res = response.data;
    if (response.data && response.data.code == 416) {
        Message({
            message: (response.data ? response.data.message : '未知错误'),
            type: 'error',
            duration: 3 * 1000,
        });
        return false
    } else if (response.status == 415 || (response.data && response.data.code == 401)) {
        removeToken();
        removeUserInfo();
        router.push({path: "/"});
    } else if (response.data && response.data.code != 200 && response.data.message) {
        Message({
            message: response.data.message,
            type: 'error',
            duration: 3 * 1000,
        });
    }
    res && stringDateExtend(res);
     return response;
}, err => {

    return Promise.reject(err);
})

export default instance;