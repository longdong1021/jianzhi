import Vue from 'vue';
import axios from "axios";
import { Toast, Indicator } from 'mint-ui';

// axios 配置
axios.defaults.timeout = 60000;
// http request 拦截器
axios.interceptors.request.use(
	config => {
		// if (localStorage.getItem("token")) {
		// 	config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("token");
		// }
		return config;
	},
	err => {
		return Promise.reject(err);
	});
// http response 拦截器
axios.interceptors.response.use(
	response => {
    Indicator.close();
		if(response.data.code === 400) {
			Toast("数据请求出错，请稍后重试");
			return Promise.reject("数据请求出错，请稍后重试")
		} 
		return response.data;
	},
	error => {
		Indicator.close();
		Toast("网络异常，请检查您的网络");
		return Promise.reject(error);
	}
);

Vue.prototype.$axios = axios;
export default axios;

