import mapData from "../data/map";

let current = {
	map: null,
	area: null,
	progress: 0,
};

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
		let area = mapData.find(a => a.id === areaId) || {};
		let map = {}, progress = 0;
		if (area && area.maps) {
			map = area.maps.find(m => m.id === mapId);
		}

		if (current.map && current.map.id === mapId) {
			progress = current.progress || progress;
		} else {
			current.map = map;
		}
		current.progress = progress;
		current.area = area;
		console.log(progress);

		resolve({
			area,
			map,
			progress,
			event: null
		})
	})
};

export const getProgress = () => {
	return new Promise((resolve, reject) => {
		resolve();
	});
};