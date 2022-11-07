import moment from 'moment';
import { each, set, get, cloneDeep, trim, toNumber, isNumber, isString, concat,isArray ,isDate} from 'lodash';
//非立即执行版防抖函数
export const debounce = (fn, interval = 500) => {
	let timeout = null;
	return ()  => {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			fn.apply(this, arguments);
		}, interval);
	};
};
 export const dateSerialization = (date) => {
	if (!isDate(date)) {
		return date;
	}
	return moment(date).format();
};
export const date2String = (obj) => {
	each(obj, (v, k) => {
		if (isArray(v)) {
			each(v, (i) => {
				date2String(i);
			});
		}
		if (Object.prototype.toString.call(v) == '[object Object]') {
			date2String(v);
		}
		if (isDate(v)) {
			obj[k] = dateSerialization(v);
		}
	});
};
export const formatTreeData = (d) => {
	each(d, (item) => {
		each(item.data, (v, k) => {
			if (k == 'type') {
				set(item, 'innerType', v);
			} else if (v) {
				set(item, k, v);
			}
			if (k == 'name') {
				set(item, 'label', v);
			}
		});
		delete item.data;
		if (item.children) {
			formatTreeData(item.children);
		}
	});
	return d;
};
export const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z\+\d{2}$/;
export const stringDateExtend = (obj) => {
	if (Object.prototype.toString.call(obj) === '[object Array]') {
		each(obj, (item) => {
			stringDateExtend(item);
		});
	}
	if (Object.prototype.toString.call(obj) !== '[object Object]') {
		return obj;
	}
	each(obj, (v, k) => {
		if (isArray(v)) {
			each(v, (i) => {
				stringDateExtend(i);
			});
		}
		if (Object.prototype.toString.call(v) === '[object Object]') {
			stringDateExtend(v);
		}
		if (typeof v === 'string' && dateFormat.test(v)) {
			v = v.replace(/Z.*/g, '');
			obj[`${k}DisplayYMDHM`] = formatDate(v, 'YYYY-MM-DD HH:mm', '--');
			obj[`${k}DisplayYMD`] = formatDate(v, 'YYYY-MM-DD', '--');
			obj[`${k}DisplayDDHHmm`] = formatDate(v, '(DD)HHmm', '--');
			obj[`${k}`] = new Date(v);
			obj[`${k}Origin`] = v;
		}
	});
};
export const formatDate = (date, opt, empty) => {
	if (!empty) {
		empty = '';
	}
	if (isNumber(date) || isString(date)) {
		date = new Date(date);
	}
	if (!date || !isDate(date)) {
		return empty;
	}
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	switch (opt) {
		case 'HHmm':
			return (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute);
		case 'HHmmss':
			return (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second);
		case 'HHmm(DD)':
			return (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute) + '(' + (day >= 10 ? day : '0' + day) + ')';
		case '(DD)HHmm':
			return '(' + (day >= 10 ? day : '0' + day) + ')' + (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute);
		case 'DD HH:mm:ss':
			return '(' + (day >= 10 ? day : '0' + day) + ')' + (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second);
		case 'HH:mm:ss':
			return (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second);
		case 'DD':
			return day >= 10 ? day : '0' + day;
		case 'MMDD':
			return (month >= 10 ? month : '0' + month) + '' + (day >= 10 ? day : '0' + day);
		case 'YYYY-MM-DD':
			return year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day);
		case 'YYYY-MM-DD HH:mm':
			return year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day) + ' ' + (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute);
		case 'YYYY-MM-DD HH:mm:ss':
			return year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day) + ' ' + (hour >= 10 ? hour : '0' + hour) + ':' + (minute >= 10 ? minute : '0' + minute) + ':' + (second >= 10 ? second : '0' + second);
		default:
			return empty;
	}
};
export const timeMinuteFormat = (num)=>{
	if(isNumber(num)){
		let secondsFormat = (sec)=>{
			let time = ''
			let days = Math.floor(sec / 24 / 60)
			let hour = Math.floor((sec - days * 24 * 60) / 60)
			let minute = Math.floor(sec - hour * 60 - days * 24 * 60)
			if(sec==0){
				return '0分'
			}
			if(days > 0){
				time += (days+ "天")
			}
			if (hour > 0) {
				time += (hour+ "时")
			}
			if (minute > 0) {
				time += (minute + "分")
			}
			return time
		}
		return secondsFormat(num)
	}else{
		return '0分'
	}
}




