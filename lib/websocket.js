// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
// import Logger from './logger';
// import { extend, map } from 'lodash';
// import { getToken, getUserInfo } from './auth';
// const log = new Logger('library:sockjs');
// const WSPORT = 8300;
// class StompClient {
// 	constructor(server) {
// 		this.server = server;
// 		this.subMap = {};
// 		this.client = Stomp.over(server.socket);
// 		this.syncConnect = this.connect();
// 		this.debug();
// 	}
// 	connect(callback) {
// 		return new Promise((resolve, reject) => {
// 			if (this.syncConnect) {
// 				resolve(this.syncConnect);
// 			}
// 			let server = this.server;
// 			let token = getToken();
// 			server.headers.userId = getUserInfo().id;
// 			log.info('userId:', server.headers.userId);
// 			server.headers.token = token;
// 			server.headers.subscribeUrl = '/topic/' + server.headers.userId;
// 			console.log('connect.....');
// 			this.client.connect(
// 				server.headers,
// 				(frame) => {
// 					log.info(`server ${server.name} client connected`);
// 					resolve(this);
// 					// postal.publish({
// 					// 	channel: 'Web',
// 					// 	topic: `${server.name}.Network.Connected`,
// 					// });
// 					// postal.publish({
// 					// 	channel: 'ServerConnect',
// 					// 	topic: `${server.name}.Network.Connected`,
// 					// });
// 				},
// 				(error) => {
// 					log.error(`${server.name}.Network.Error`, error);
// 					reject(null);
//
// 					// postal.publish({
// 					// 	channel: 'Web',
// 					// 	topic: `${server.name}.Network.Error`,
// 					// });
// 				},
// 			);
// 		});
// 	}
//
// 	/*****
// 	/data.body.
// 	/responseMessage 返回内容
// 	/responseType 返回类型json string
// 	/total 返回总数
// 	/count 返回次数计数
// 	/requestType 200 成功  500错误
// 	*****/
// 	sub(key, callback, options) {
// 		this.subMap[key] = this.client.subscribe(
// 			key,
// 			(frame) => {
// 				if (frame.body) {
// 					// data.body.responseData 返回内容
// 					// data.body.responseType 返回类型json string
// 					// data.body.total 返回总数
// 					// data.body.count 返回次数计数
// 					// data.body.responseCode 200 成功  500错误
// 					let sBody = JSON.parse(frame.body);
// 					callback(sBody);
// 					// if (sBody.responseCode && sBody.responseCode === 200) {
// 					// 	let contentData = sBody;
// 					// 	if (sBody.responseType === 'json' && sBody.responseData) {
// 					// 		try {
// 					// 			contentData = JSON.parse(sBody.responseData);
// 					// 		} catch (e) {
// 					// 			contentData = sBody.responseData;
// 					// 		}
// 					// 	}
// 					// 	callback(contentData);
// 					// } else if (sBody.responseCode && sBody.responseCode === 500) {
// 					// 	log.error('server error', frame.headers.destination, sBody.responseCode);
// 					// } else {
// 					// 	let data = sBody.responseData ? JSON.parse(sBody.responseData) : sBody;
// 					// 	callback(data, frame.body);
// 					// }
// 				} else {
// 					log.error('got empty message');
// 				}
// 			},
// 			options || {},
// 		);
// 	}
//
// 	send(...args) {
// 		this.client.send.apply(this.client, args);
// 	}
//
// 	unSub(key) {
// 		this.subMap[key].unsubscribe();
// 	}
//
// 	debug() {
// 		this.client.debug = function(msg) {
// 			// log.verbose(msg);
// 		};
// 	}
//
// 	disconnect(callback) {
// 		this.client.disconnect(callback);
// 	}
// }
//
// class Sock {
// 	constructor(servers) {
// 		this.servers = servers;
// 		map(servers, (server) => {
// 			server.socket = null;
// 			server.recTimer = null;
// 			this.connectSock(server);
// 		});
// 		return this;
// 	}
//
// 	connectSock(server) {
// 		let self = this;
// 		clearInterval(server.recTimer);
// 		log.verbose(`socket.io should connect to host ${server.host} port ${server.port} for channel ${server.channel}`);
// 		server.socket = new SockJS(`http://${server.host}:${server.port}/${server.channel}`);
// 		server.client = new StompClient(server);
//
// 		server.socket.onclose = () => {
// 			log.info(`socket closed ${server}`);
// 			server.socket = null;
// 			server.recTimer = setInterval(function() {
// 				self.connectSock(server);
// 			}, 2000);
// 		};
// 	}
//
// 	regist(name) {
// 		// map(this.servers, (server) => {
// 		// 	if (server.name == name) {
// 		// 		callback(server.client);
// 		// 	}
// 		// });
// 		return new Promise((resolve, reject) => {
// 			let client;
// 			map(this.servers, (server) => {
// 				if (server.name == name) {
// 					client = server.client;
// 				}
// 			});
// 			return resolve(client.syncConnect);
// 		});
// 	}
// }
//
// export default (servers) => {
// 	return new Sock(servers);
// };
