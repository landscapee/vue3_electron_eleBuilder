const TokenKey = 'token';
const RoleCode = 'rolecode';
const UserInfoKey = 'userInfo';
const ButtonRoleKey = 'buttonRole';
export function getToken() {
	return localStorage.getItem(TokenKey);
}
export function getButtonRole() {
	let tmp = localStorage.getItem(ButtonRoleKey);
	if (tmp) {
		return JSON.parse(tmp);
	} else {
		return [];
	}
}
export function getRoleCode() {
	return localStorage.getItem(RoleCode);
}
export function getUserInfo() {
	let tmp = localStorage.getItem(UserInfoKey);
	if (tmp) {
		return JSON.parse(tmp);
	} else {
		return {};
	}
}

export function setToken(token) {
	return localStorage.setItem(TokenKey, token);
}
export function setButtonRole(buttonRole) {
	return localStorage.setItem(ButtonRoleKey, JSON.stringify(buttonRole));
}
export function setRoleCode(rolecode) {
	return localStorage.setItem(RoleCode, rolecode);
}
export function setUserInfo(userInfo) {
	return localStorage.setItem(UserInfoKey, JSON.stringify(userInfo));
}

export function removeToken() {
	return localStorage.removeItem(TokenKey);
}
export function removeButtonRole() {
	return localStorage.removeItem(ButtonRoleKey);
}
export function removeRoleCode() {
	return localStorage.removeItem(RoleCode);
}
export function removeUserInfo() {
	return localStorage.removeItem(UserInfoKey);
}
