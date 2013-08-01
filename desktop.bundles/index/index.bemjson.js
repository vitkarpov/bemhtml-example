({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: '_index.css', ie: false},
        { elem: 'css', url: '_index.ie.css', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_index.js'},
    ],
    content: [
        {
            block: 'head',
            mix: [
                { 
                    block: 'box',
                    mods: { head: 'yes' },
                    js: true 
                }
            ],
            content: [
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'content',
                            content: {
                                block: 'b-search',
                                attrs: { action: '/search.xml' },
                                input: {
                                    elem: 'input',
                                    attrs: { placeholder: 'Find' }
                                },
                                button: {
                                    elem: 'button'
                                }
                            }
                        },
                        {
                            elem: 'sidebar',
                            content: {
                                block: 'b-logo',
                                content: {
                                    elem: 'link',
                                    url: 'http://bem.info',
                                    content: [
                                        {
                                            elem: 'icon',
                                            url: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'
                                        },
                                        {
                                            elem: 'slogan',
                                            content: 'A new way of thinking'
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    block: 'box',
                    elem: 'switcher'
                }
            ]    
        },
        {
            block: 'goods',
            goods: [
                {
                    title: 'Apple iPhone 4S 32Gb',
                    image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
                    price: '259',
                    url: '/'
                },
                {
                    title: 'Samsung Galaxy Ace S5830',
                    image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
                    price: '73',
                    url: '/'
                },
                {
                    title: 'HTC One S',
                    image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
                    price: '152',
                    url: '/'
                },
                {
                    title: 'Sharp SH530U',
                    image: 'http://mdata.yandex.net/i?path=b1119145405_img_id7474251838115767025.jpg',
                    price: '***',
                    url: '/',
                    new: true
                },
                {
                    title: 'Samsung Galaxy S III 16Gb',
                    image: 'http://mdata.yandex.net/i?path=b0503234231_img_id4954748565558111178.jpg',
                    price: '180',
                    url: '/'
                }
            ]
        }
    ]
})