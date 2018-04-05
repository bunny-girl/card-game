import mapData from "../data/map";

export const getUserData = () => {
	return new Promise((resolve, reject) => {
		let user = {
			maxStamina: 100,
			maxLevel: 10
		};
		resolve(user);
	})
};

export const getUserInfo = () => {
	return new Promise((resolve, reject) => {
		let user = {
			nickname: 'Nick',
			gender: 'male',
			uid: 'UserUid0001'
		};
		resolve(user);
	})
};

export const getMapData = (areaId, mapId) => {
	return new Promise((resolve, reject) => {
		let area = mapData.find(a => a.id === areaId);
		let map;
		if (area && area.maps) {
			map = area.maps.find(m => m.id === mapId);
		}
		resolve({
			area,
			map,
			event: null
		})
	})
};