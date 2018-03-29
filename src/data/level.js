export const level = {
	"0" : [
		{
			level : 1,
			atk : 10,
			hp : 100,
			expNeed : 100
		},
		{
			level : 2,
			atk : 11,
			hp : 110,
			expNeed : 100
		},
	]
}

//经验成长系数
export const expRatio = [];

//经验提供系数
// export const exp

//卡牌所需的碎片数据，基数
export const piece = [40, 80, 160, 320];

//不同type的卡牌所需要的碎片系数
export const pieceRatioByType = {
	1 : 1,
	2 : 1.2
}