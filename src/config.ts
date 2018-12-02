import { Children } from 'react';

export const BASE_URL = 'https://api.6pan.cn';

export const menus = [
    {
        name: '我的文件',
        isLabel: true,
        icon: 'fa-file-alt',
        location: '',
        children: [
            {
                name: '全部文件',
                isLabel: false,
                location: '/files/',
                icon: ''
            },
            {
                name: '图片',
                isLabel: false,
                location: '/pictures/',
                icon: ''
            },
            {
                name: '视频',
                isLabel: false,
                location: '/videos/',
                icon: ''
            },
            {
                name: '种子',
                isLabel: false,
                location: '/torrents/',
                icon: ''
            },
            {
                name: '音乐',
                isLabel: false,
                location: '/musics/',
                icon: ''
            },
            {
                name: '其他',
                isLabel: false,
                location: '/others/',
                icon: ''
            }
        ]
    },
    {
        name: '传输列表',
        isLabel: true,
        icon: '',
        location: '',
        children: [
            {
                name: '正在上传',
                isLabel: false,
                location: '/uploading/',
                icon: ''
            },
            {
                name: '正在下载',
                isLabel: false,
                location: '/downloading/',
                icon: ''
            },
            {
                name: '传输完成',
                isLabel: false,
                location: '/finish/',
                icon: ''
            },
            {
                name: '垃圾箱',
                isLabel: false,
                location: '/garbage/',
                icon: ''
            }
        ]
    }
];
