export const page = {
    pageTypeList: [
        { type: 'basic', label: '基础配置', },
        { type: 'home', label: '首页', },
        { type: 'user', label: '个人页', }
    ],
    systemList: [
        { type: 'android', label: 'Android', color: '#6F74E9', },
        { type: 'ios', label: 'IOS', color: '#333333', },
    ],
    platformList: [
        { type: 'WechatMiniProgram', label: '微信小程序', color: '#6F74E9', },
        { type: 'WechatOfficialAccount', label: '微信公众号', color: '#07C160', },
        { type: 'H5', label: 'H5', color: '#FC800E', },
        { type: 'App', label: 'APP', color: '#806AF6', },
    ],
    pageLeft: {
        basic: [
            {
                name: '应用设置',
                type: 'basic',
                data: [
                    { name: '底部导航', type: 'tabbar', },
                    { name: '悬浮按钮', type: 'floatMenu', },
                    { name: '弹窗广告', type: 'popupImage', },
                ],
            },
            {
                name: '主题色',
                type: 'theme',
                data: [
                    { name: '淘宝橙', type: 'orange', },
                    { name: '香槟金', type: 'golden', },
                    { name: '美团黄', type: 'yellow', },
                    { name: '低奢黑', type: 'black', },
                    { name: '微信绿', type: 'green', },
                    { name: '尊贵紫', type: 'purple', },
                ],
            },
        ],
        compList: [
            {
                name: '会员组件',
                type: '0',
                show: ['user', 'diypage'],
                data: [
                    { name: '会员卡片', type: 'userCard', },
                    { name: '订单卡片', type: 'orderCard', },
                    { name: '资产卡片', type: 'walletCard', },
                    { name: '卡券卡片', type: 'couponCard', },
                ],
            },
            {
                name: '基础组件',
                type: '1',
                data: [
                    { name: '搜索框', type: 'searchBlock', },
                    { name: '公告栏', type: 'noticeBlock', },
                    { name: '菜单导航', type: 'menuButton', },
                    { name: '列表导航', type: 'menuList', },
                    { name: '宫格导航', type: 'menuGrid', },
                ],
            },
            {
                name: '商品组件',
                type: '2',
                data: [
                    { name: '商品卡片', type: 'goodsCard', },
                    { name: '商品栏', type: 'goodsShelves', },
                ],
            },
            {
                name: '图文组件',
                type: '3',
                data: [
                    { name: '图片展示', type: 'imageBlock', },
                    { name: '图片轮播', type: 'imageBanner', },
                    { name: '标题栏', type: 'titleBlock', },
                    { name: '广告魔方', type: 'imageCube', },
                    { name: '视频播放', type: 'videoPlayer', },
                    { name: '辅助线', type: 'lineBlock', },
                    { name: '富文本', type: 'richtext', },
                    { name: '热区', type: 'hotzone', },
                ],
            },
            {
                name: '营销组件',
                type: '4',
                data: [
                    { name: '拼团', type: 'groupon', },
                    { name: '秒杀', type: 'seckill', },
                    { name: '积分商城', type: 'scoreGoods', },
                    { name: '小程序直播', type: 'mplive', },
                    {
                        name: '优惠券',
                        type: 'coupon',
                    },
                    // { name: '关注公众号', type: 'subscribeWechatOfficialAccount', },
                ],
            },
        ]
    },
    defaultTemplateData: {
        basic: {
            // splashScreen: {
            //     status: false, // false|true
            //     src: '',
            //     countdown: 5,
            //     url: '',
            // },
            // guidePage: {
            //     status: false, // false|true
            //     list: [],
            // },
            tabbar: {
                mode: 1, // 1 2
                layout: 1, // 1=文字+图片 2=文字 3=图片
                inactiveColor: '#EEEEEE',
                activeColor: '#000000',
                list: [],
                background: {
                    type: 'color', // color=纯色 image=背景图
                    bgImage: '',
                    bgColor: '#FFFFFF',
                },
            },
            floatMenu: {
                show: 0, // 0|1
                mode: 1, // 1|2
                isText: 0, // 0|2
                list: [
                    {
                        src: '',
                        url: '',
                        title: {
                            text: '',
                            color: '',
                        },
                    },
                ],
            },
            popupImage: {
                list: [],
            },
            theme: 'orange',
        },
        home: {
            data: [],
            style: {
                background: {
                    color: '#F6F6F6',
                    src: '',
                },
                navbar: {
                    mode: 'normal', // normal inner
                    alwaysShow: 0, // 0 1
                    type: 'color',
                    color: '',
                    src: '',
                    list: {
                        mp: [],
                        app: [],
                    },
                },
            },
        },
        user: {
            data: [
                {
                    type: 'userCard',
                    style: {
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 10,
                        borderRadiusTop: 0,
                        borderRadiusBottom: 0,
                        background: {
                            type: 'color',
                            bgImage: '',
                            bgColor: '#FFFFFF',
                        },
                    },
                },
            ],
            style: {
                background: {
                    color: '#F6F6F6',
                    src: '',
                },
                navbar: {
                    mode: 'normal', // normal inner
                    alwaysShow: 0, // 0 1
                    type: 'color',
                    color: '',
                    src: '',
                    list: {
                        mp: [],
                        app: [],
                    },
                },
            },
        },
        diypage: {
            data: [],
            style: {
                background: {
                    color: '',
                    src: '',
                },
                navbar: {
                    mode: 'normal', // normal inner
                    alwaysShow: 0, // 0 1
                    type: 'color',
                    color: '',
                    src: '',
                    list: {
                        mp: [],
                        app: [],
                    },
                },
            },
        },
    },
    compNameObj: {
        tabbar: {
            label: '底部导航',
            item: {
                inactiveIcon: '',
                activeIcon: '',
                url: '',
                text: '',
            }
        },
        floatMenu: {
            label: '悬浮按钮',
            item: {
                src: '',
                url: '',
                title: {
                    text: '',
                    color: '',
                },
            }
        },
        popupImage: {
            label: '弹窗广告',
            item: {
                src: '',
                url: '',
                show: 1
            }
        },
        page: {
            label: '页面设置',
            item: {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                minRow: 0,
                maxRow: 0,
                minCol: 0,
                maxCol: 0,
                type: 'text',
                text: '',
                textColor: '#111111',
                src: '',
                url: '',
                placeholder: '',
                borderRadius: 0,
            },
            scale: 38,
            map: { tr: 1, td: 8 }
        },
        userCard: {
            label: '会员卡片',
            item: {}
        },
        orderCard: {
            label: '订单卡片',
            item: {}
        },
        walletCard: {
            label: '资产卡片',
            item: {}
        },
        couponCard: {
            label: '卡券卡片',
            item: {}
        },
        searchBlock: {
            label: '搜索框',
            item: {
                text: '',
                color: '',
            }
        },
        noticeBlock: {
            label: '公告栏',
            item: {
                text: '',
                color: '',
            }
        },
        menuButton: {
            label: '菜单导航',
            item: {
                src: '',
                title: {
                    text: '',
                    color: '#000',
                },
                url: '',
                badge: {
                    show: 0,
                    text: '',
                    color: '#FFFFFF',
                    bgColor: '#FF6000',
                },
            }
        },
        menuList: {
            label: '列表导航',
            item: {
                src: '',
                title: {
                    text: '',
                    color: '#333',
                },
                tip: {
                    text: '',
                    color: '#bbb',
                },
                url: '',
            }
        },
        menuGrid: {
            label: '宫格导航',
            item: {
                src: '',
                title: {
                    text: '',
                    color: '#333',
                },
                tip: {
                    text: '',
                    color: '#bbb',
                },
                url: '',
                badge: {
                    show: 0,
                    text: '',
                    color: '#FFFFFF',
                    bgColor: '#FF6000',
                },
            }
        },
        goodsCard: {
            label: '商品卡片',
            item: {},
            fieldLabel: {
                title: '商品标题',
                subtitle: '副标题',
                price: '商品价格',
                original_price: '原价',
                sales: '销量',
                stock: '库存',
            },
            width: {
                1: '100%',
                2: '50%',
                3: '100%',
            }
        },
        goodsShelves: {
            label: '商品栏',
            item: {},
            fieldLabel: {
                title: '商品标题',
                price: '商品价格',
            },
            width: {
                1: '50%',
                2: '33.3%',
                3: '32%',
            }
        },
        imageBlock: {
            label: '图片展示',
            item: {}
        },
        imageBanner: {
            label: '图片轮播',
            item: {
                title: '',
                type: 'image',
                src: '',
                poster: '',
                url: ''
            }
        },
        titleBlock: {
            label: '标题栏',
            item: {}
        },
        imageCube: {
            label: '广告魔方',
            item: {}
        },
        videoPlayer: {
            label: '视频播放',
            item: {}
        },
        lineBlock: {
            label: '辅助线',
            item: {}
        },
        richtext: {
            label: '富文本',
            item: {}
        },
        hotzone: {
            label: '热区',
            item: {}
        },
        groupon: {
            label: '拼团',
            item: {},
            fieldLabel: {
                1: {
                    title: '标题',
                    price: '价格',
                },
                2: {
                    title: '商品标题',
                    subtitle: '副标题',
                    price: '商品价格',
                    original_price: '原价',
                    sales: '销量',
                },
            },
        },
        seckill: {
            label: '秒杀',
            item: {},
            fieldLabel: {
                1: {
                    title: '标题',
                    price: '价格',
                    // original_price: '原价',
                },
                2: {
                    title: '商品标题',
                    subtitle: '副标题',
                    price: '商品价格',
                    original_price: '原价',
                    sales: '销量',
                },
            },
        },
        scoreGoods: {
            label: '积分商城',
            item: {},
            fieldLabel: {
                title: '商品标题',
                subtitle: '副标题',
                score_price: '兑换颜色',
                price: '原价',
            },
        },
        mplive: {
            label: '小程序直播',
            item: {},
            fieldLabel: {
                name: '直播标题',
                anchor_name: '主播昵称',
            },
            width: {
                1: '100%',
                2: '50%',
            },
        },
        coupon: {
            label: '优惠券',
            item: {},
            width: {
                1: '90%',
                2: '50%',
                3: '33.3%',
            },
        },
    },
    themeColor: {
        orange: {
            color1: '#FF6000',
            color2: '#FE832A',
        },
        golden: {
            color1: '#E9B461',
            color2: '#EECC89',
        },
        yellow: {
            color1: '#FFC300',
            color2: '#FDDF47',
        },
        black: {
            color1: '#484848',
            color2: '#6D6D6D',
        },
        green: {
            color1: '#2AAE67',
            color2: '#3ACD72',
        },
        purple: {
            color1: '#652ABF',
            color2: '#A36FFF',
        },
    },
    cloneComponent: (type, theme = 'orange') => {
        let comp = {
            userCard: {
                type: 'userCard',
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            orderCard: {
                type: 'orderCard',
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            walletCard: {
                type: 'walletCard',
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            couponCard: {
                type: 'couponCard',
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            searchBlock: {
                type: 'searchBlock',
                data: {
                    placeholder: '',
                    borderRadius: 0,
                    keywords: [
                        // {
                        //     text: '',
                        //     color: '#8C8C8C',
                        // }
                    ],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            noticeBlock: {
                type: 'noticeBlock',
                data: {
                    mode: 1,
                    src: '/assets/addons/shopro/img/decorate/notice/1.png',
                    title: {
                        text: '',
                        color: '#111111',
                    },
                    url: '',
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            menuButton: {
                type: 'menuButton',
                data: {
                    layout: 1, // 1=图片+文字 2=图片
                    col: 3, // 列数 3|4|5
                    row: 1, // 1 2 3行数 超出滑动
                    list: [
                        // {
                        //     src: '',
                        //     title: {
                        //         text: '',
                        //         color: '#000'
                        //     },
                        //     url: '',
                        //     badge: {
                        //         show: 0, // 0|1
                        //         text: '',
                        //         color: '#FFFFFF',
                        //         bgColor: '#FF6000',
                        //     },
                        // }
                    ],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            menuList: {
                type: 'menuList',
                data: {
                    list: [
                        // {
                        //     src: '',
                        //     title: {
                        //         text: '',
                        //         color: '#333'
                        //     },
                        //     tip: {
                        //         text: '',
                        //         color: '#bbb'
                        //     },
                        //     url: '',
                        // }
                    ],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            menuGrid: {
                type: 'menuGrid',
                data: {
                    col: 3, // 列数 3|4
                    // border: 0, // 边框 0|1
                    list: [
                        {
                            src: '',
                            title: {
                                text: '',
                                color: '#333',
                            },
                            tip: {
                                text: '',
                                color: '#bbb',
                            },
                            url: '',
                            badge: {
                                show: 0, // 0|1
                                text: '',
                                color: '#FFFFFF',
                                bgColor: '#FF6000',
                            },
                        },
                    ],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            goodsCard: {
                type: 'goodsCard',
                data: {
                    mode: 1,
                    goodsFields: {
                        title: {
                            show: 1, // 0|1
                            color: '#000',
                        },
                        subtitle: {
                            show: 1, // 0|1
                            color: '#999',
                        },
                        price: {
                            show: 1, // 0|1
                            color: '#ff3000',
                        },
                        original_price: {
                            show: 1, // 0|1
                            color: '#c4c4c4',
                        },
                        sales: {
                            show: 1, // 0|1
                            color: '#c4c4c4',
                        },
                        stock: {
                            show: 0, // 0|1
                            color: '#c4c4c4',
                        },
                    },
                    buyNowStyle: {
                        mode: 1,
                        text: '立即购买',
                        color1: page.themeColor[theme].color1,
                        color2: page.themeColor[theme].color2,
                        src: '',
                    },
                    tagStyle: {
                        show: 0,
                        src: '',
                    },
                    goodsIds: [],
                    goodsList: [],
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 8,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '',
                    },
                    marginLeft: 8,
                    marginRight: 8,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            goodsShelves: {
                type: 'goodsShelves',
                data: {
                    mode: 1,
                    goodsFields: {
                        title: {
                            show: 1, // 0|1
                            color: '#333',
                        },
                        price: {
                            show: 1, // 0|1
                            color: '#ff3000',
                        },
                    },
                    tagStyle: {
                        show: 0,
                        src: '',
                    },
                    goodsIds: [],
                    goodsList: [],
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            imageBlock: {
                type: 'imageBlock',
                data: {
                    src: '',
                    url: '',
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                    // height: 300,
                },
            },
            imageBanner: {
                type: 'imageBanner',
                data: {
                    mode: 1, // 1 2
                    indicator: 1, // 1 2
                    autoplay: false,
                    interval: 3000,
                    list: [
                        // {
                        //     title: '',
                        //     type: 'image',
                        //     src: '',
                        //     poster: '',
                        //     url: ''
                        // }
                    ],
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                    // height: 300,
                },
            },
            titleBlock: {
                type: 'titleBlock',
                data: {
                    src: '/assets/addons/shopro/img/decorate/title/1.png',
                    location: 'left', // left=居左 center=居中
                    skew: 0,
                    title: {
                        text: '标题栏',
                        color: '#111111',
                        textFontSize: 14,
                        other: [], // bold=加粗 italic=倾斜
                    },
                    subtitle: {
                        text: '副标题',
                        color: '#8c8c8c',
                        textFontSize: 12,
                        other: [], // bold=加粗 italic=倾斜
                    },
                    more: {
                        show: 0, // 0=不显示 1=显示
                        url: '',
                    },
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                    height: 40,
                },
            },
            imageCube: {
                type: 'imageCube',
                data: {
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 0,
                    list: [
                        // {
                        //     width: 0,
                        //     height: 0,
                        //     top: 0,
                        //     left: 0,
                        //     src: '',
                        //     url: ''
                        // }
                    ],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            videoPlayer: {
                type: 'videoPlayer',
                data: {
                    videoUrl: '', // 视频地址
                    src: '' // 视频封面
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                    height: 300,
                },
            },
            lineBlock: {
                type: 'lineBlock',
                data: {
                    mode: 'solid', // solid dotted dashed
                    lineColor: '',
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    padding: 0,
                },
            },
            richtext: {
                type: 'richtext',
                data: {
                    id: '',
                    title: '',
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    padding: 0,
                },
            },
            hotzone: {
                type: 'hotzone',
                data: {
                    src: '',
                    list: [],
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    // marginLeft: 0,
                    // marginRight: 0,
                    // marginTop: 0,
                    // marginBottom: 10,
                    // padding: 0,
                },
            },
            groupon: {
                type: 'groupon',
                data: {
                    activityId: '',
                    activityList: [],
                    goodsList: [],
                    mode: 1,
                    tagStyle: {
                        show: 0, // 0,1
                        src: '',
                    },
                    goodsFields: {
                        title: {
                            show: 1, // 0|1
                            color: '#000',
                        },
                        subtitle: {
                            show: 1, // 0|1
                            color: '#999',
                        },
                        price: {
                            show: 1, // 0|1
                            color: '#FF0000',
                        },
                        original_price: {
                            show: 1, // 0|1
                            color: '#C4C4C4',
                        },
                        sales: {
                            show: 1, // 0|1
                            color: '#c4c4c4',
                        },
                    },
                    buyNowStyle: {
                        mode: 1,
                        text: '立即拼团',
                        color1: page.themeColor[theme].color1,
                        color2: page.themeColor[theme].color2,
                        src: '',
                    },
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            seckill: {
                type: 'seckill',
                data: {
                    activityId: '',
                    activityList: [],
                    goodsList: [],
                    mode: 1,
                    tagStyle: {
                        show: 0, // 0,1
                        src: '',
                    },
                    goodsFields: {
                        title: {
                            show: 1, // 0|1
                            color: '#000',
                        },
                        subtitle: {
                            show: 1, // 0|1
                            color: '#999',
                        },
                        price: {
                            show: 1, // 0|1
                            color: '#FF0000',
                        },
                        original_price: {
                            show: 1, // 0|1
                            color: '#C4C4C4',
                        },
                        sales: {
                            show: 1, // 0|1
                            color: '#c4c4c4',
                        },
                    },
                    buyNowStyle: {
                        mode: 1,
                        text: '去抢购',
                        color1: page.themeColor[theme].color1,
                        color2: page.themeColor[theme].color2,
                        src: '',
                    },
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            scoreGoods: {
                type: 'scoreGoods',
                data: {
                    goodsIds: [],
                    goodsList: [],
                    mode: 1,
                    goodsFields: {
                        title: {
                            show: 1, // 0|1
                            color: '#333',
                        },
                        subtitle: {
                            show: 1, // 0|1
                            color: '#999',
                        },
                        score_price: {
                            show: 1, // 0|1
                            color: '#FF3000',
                        },
                        price: {
                            show: 1, // 0|1
                            color: '#C4C4C4',
                        },
                    },
                    buyNowStyle: {
                        mode: 1,
                        text: '去兑换',
                        color1: page.themeColor[theme].color1,
                        color2: page.themeColor[theme].color2,
                        src: '',
                    },
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            mplive: {
                type: 'mplive',
                data: {
                    mode: 1,
                    goodsFields: {
                        name: {
                            show: 1, // 0|1
                            color: '#FDFDFD',
                        },
                        anchor_name: {
                            show: 1, // 0|1
                            color: '#FDFDFD',
                        },
                    },
                    mpliveIds: [],
                    mpliveList: [],
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    space: 8,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '',
                    },
                    marginLeft: 8,
                    marginRight: 8,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
            coupon: {
                type: 'coupon',
                data: {
                    couponIds: [],
                    couponList: [],
                    mode: 1,
                    fill: {
                        color: '',
                        bgImage: '',
                    },
                    button: {
                        color: '',
                        bgColor: '',
                    },
                    space: 0,
                },
                style: {
                    background: {
                        type: 'color',
                        bgImage: '',
                        bgColor: '#FFFFFF',
                    },
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 10,
                    borderRadiusTop: 0,
                    borderRadiusBottom: 0,
                    padding: 0,
                },
            },
        };
        return comp[type];
    },
}