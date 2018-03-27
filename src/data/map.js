/**
 * Created by Edel on 2018/3/22.
 */

export default [
    {
        id: 'a-001',
        name: '冲积平原',
        maps: [
            {
                id: 'm-001-001',
                name: '登陆点',
                steps: 7,
                loot : "001"
            }
        ],
        open: true
    },
    {
        id: 'a-002',
        name: '雨林',
        maps: [
            {
                id: 'm-002-001',
                name: '测试区域',
                steps: 9,
                loot : "001"
            }
        ],
        open: true,
        unlockFlag: {
            level: 10
        }
    },
    {
        id: 'a-003',
        name: '火山',
        open: false,
    },
    {
        id: 'a-004',
        name: '城市废墟'
    },
    {
        id: 'a-005',
        name: '高原'
    },
    {
        id: 'a-006',
        name: '沙漠'
    },
    {
        id: 'a-007',
        name: '荒野'
    },
    {
        id: 'a-008',
        name: '峡湾'
    },
    {
        id: 'a-009',
        name: '圣山'
    },
    {
        id: 'a-010',
        name: '丘陵'
    },
    {
        id: 'a-011',
        name: '谷地'
    }
]