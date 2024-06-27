var game;
window.onload = function() {
    game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'game');
    game.state.add("boot",Boot);
    game.state.add("loading",Loading);
    game.state.add("main",Main);
    game.state.start('boot');
};

// 根场景
function Boot(){
    this.preload = function() {
        game.load.spritesheet('loading', 'assets/loading.png', 80, 24);
    };
    this.create = function() {
        game.state.start('loading');
    }
}

// 加载游戏资源
function Loading(){
    this.preload = function() {
        // 资源加载动画
        loadingSprite = game.add.sprite(200, 150, 'loading');
        loadingSprite.animations.add('loadingplay', [0, 1, 2], 5, true);
        loadingSprite.animations.play('loadingplay');

        game.load.image('bg', 'assets/bg-spring.png');

        game.load.image('tree1', 'assets/tree1.png');
        game.load.image('tree2', 'assets/tree2.png');
        game.load.image('tree3', 'assets/tree3.png');

        game.load.image('flower1', 'assets/flower1.png');
        game.load.image('flower2', 'assets/flower2.png');
        game.load.image('flower3', 'assets/flower3.png');
        game.load.image('flower4', 'assets/flower4.png');

        game.load.image('shallowGreen', 'assets/shallowGreen.png');
        game.load.image('buy', 'assets/buy.png');

        game.load.image('soil_1', 'assets/soil/1.png');
        game.load.image('soil_2', 'assets/soil/2.png');
        game.load.image('soil_3', 'assets/soil/3.png');

        game.load.image('seed', 'assets/seed.png');
        game.load.image('fade', 'assets/fade.png');
        game.load.image('banana_1', 'assets/banana/1.png');
        game.load.image('banana_2', 'assets/banana/2.png');
        game.load.image('banana_3', 'assets/banana/3.png');
        game.load.image('banana_4', 'assets/banana/4.png');
        game.load.image('banana_5', 'assets/banana/5.png');
        game.load.image('banana_6', 'assets/banana/6.png');
        game.load.image('banana_icon', 'assets/banana/icon.png');

        game.load.image('cherry_1', 'assets/cherry/1.png');
        game.load.image('cherry_2', 'assets/cherry/2.png');
        game.load.image('cherry_3', 'assets/cherry/3.png');
        game.load.image('cherry_4', 'assets/cherry/4.png');
        game.load.image('cherry_5', 'assets/cherry/5.png');
        game.load.image('cherry_6', 'assets/cherry/6.png');
        game.load.image('cherry_icon', 'assets/cherry/icon.png');

        game.load.image('corn_1', 'assets/corn/1.png');
        game.load.image('corn_2', 'assets/corn/2.png');
        game.load.image('corn_3', 'assets/corn/3.png');
        game.load.image('corn_4', 'assets/corn/4.png');
        game.load.image('corn_5', 'assets/corn/5.png');
        game.load.image('corn_icon', 'assets/corn/icon.png');

        game.load.image('eggplant_1', 'assets/eggplant/1.png');
        game.load.image('eggplant_2', 'assets/eggplant/2.png');
        game.load.image('eggplant_3', 'assets/eggplant/3.png');
        game.load.image('eggplant_4', 'assets/eggplant/4.png');
        game.load.image('eggplant_5', 'assets/eggplant/5.png');
        game.load.image('eggplant_icon', 'assets/eggplant/icon.png');

        game.load.image('huradish_1', 'assets/huradish/1.png');
        game.load.image('huradish_2', 'assets/huradish/2.png');
        game.load.image('huradish_3', 'assets/huradish/3.png');
        game.load.image('huradish_4', 'assets/huradish/4.png');
        game.load.image('huradish_icon', 'assets/huradish/icon.png');

        game.load.image('peach_1', 'assets/peach/1.png');
        game.load.image('peach_2', 'assets/peach/2.png');
        game.load.image('peach_3', 'assets/peach/3.png');
        game.load.image('peach_4', 'assets/peach/4.png');
        game.load.image('peach_5', 'assets/peach/5.png');
        game.load.image('peach_icon', 'assets/peach/icon.png');

        game.load.image('peas_1', 'assets/peas/1.png');
        game.load.image('peas_2', 'assets/peas/2.png');
        game.load.image('peas_3', 'assets/peas/3.png');
        game.load.image('peas_4', 'assets/peas/4.png');
        game.load.image('peas_5', 'assets/peas/5.png');
        game.load.image('peas_icon', 'assets/peas/icon.png');

        game.load.image('pepper_1', 'assets/pepper/1.png');
        game.load.image('pepper_2', 'assets/pepper/2.png');
        game.load.image('pepper_3', 'assets/pepper/3.png');
        game.load.image('pepper_4', 'assets/pepper/4.png');
        game.load.image('pepper_5', 'assets/pepper/5.png');
        game.load.image('pepper_icon', 'assets/pepper/icon.png');

        game.load.image('pineapple_1', 'assets/pineapple/1.png');
        game.load.image('pineapple_2', 'assets/pineapple/2.png');
        game.load.image('pineapple_3', 'assets/pineapple/3.png');
        game.load.image('pineapple_4', 'assets/pineapple/4.png');
        game.load.image('pineapple_5', 'assets/pineapple/5.png');
        game.load.image('pineapple_6', 'assets/pineapple/6.png');
        game.load.image('pineapple_icon', 'assets/pineapple/icon.png');

        game.load.image('potato_1', 'assets/potato/1.png');
        game.load.image('potato_2', 'assets/potato/2.png');
        game.load.image('potato_3', 'assets/potato/3.png');
        game.load.image('potato_4', 'assets/potato/4.png');
        game.load.image('potato_5', 'assets/potato/5.png');
        game.load.image('potato_icon', 'assets/potato/icon.png');

        game.load.image('pumpkin_1', 'assets/pumpkin/1.png');
        game.load.image('pumpkin_2', 'assets/pumpkin/2.png');
        game.load.image('pumpkin_3', 'assets/pumpkin/3.png');
        game.load.image('pumpkin_4', 'assets/pumpkin/4.png');
        game.load.image('pumpkin_5', 'assets/pumpkin/5.png');
        game.load.image('pumpkin_icon', 'assets/pumpkin/icon.png');

        game.load.image('radish_1', 'assets/radish/1.png');
        game.load.image('radish_2', 'assets/radish/2.png');
        game.load.image('radish_3', 'assets/radish/3.png');
        game.load.image('radish_4', 'assets/radish/4.png');
        game.load.image('radish_icon', 'assets/radish/icon.png');

        game.load.image('strawberry_1', 'assets/strawberry/1.png');
        game.load.image('strawberry_2', 'assets/strawberry/2.png');
        game.load.image('strawberry_3', 'assets/strawberry/3.png');
        game.load.image('strawberry_4', 'assets/strawberry/4.png');
        game.load.image('strawberry_5', 'assets/strawberry/5.png');
        game.load.image('strawberry_icon', 'assets/strawberry/icon.png');

        game.load.image('tomato_1', 'assets/tomato/1.png');
        game.load.image('tomato_2', 'assets/tomato/2.png');
        game.load.image('tomato_3', 'assets/tomato/3.png');
        game.load.image('tomato_4', 'assets/tomato/4.png');
        game.load.image('tomato_5', 'assets/tomato/5.png');
        game.load.image('tomato_icon', 'assets/tomato/icon.png');

        game.load.image('watermelon_1', 'assets/watermelon/1.png');
        game.load.image('watermelon_2', 'assets/watermelon/2.png');
        game.load.image('watermelon_3', 'assets/watermelon/3.png');
        game.load.image('watermelon_4', 'assets/watermelon/4.png');
        game.load.image('watermelon_5', 'assets/watermelon/5.png');
        game.load.image('watermelon_icon', 'assets/watermelon/icon.png');


        game.load.image('progress', 'assets/progress.png');
        game.load.image('progress2', 'assets/progress2.png');


        game.load.image('extension', 'assets/extension.png');
        game.load.image('store', 'assets/store.png');
        game.load.image('warehouse', 'assets/warehouse.png');
        game.load.image('sow', 'assets/sow.png');
        game.load.image('watering', 'assets/watering.png');
        game.load.image('shovel', 'assets/shovel.png');
        game.load.image('harvest', 'assets/harvest.png');

        game.load.image('gray', 'assets/gray.png');
        game.load.image('white', 'assets/white.png');
        game.load.image('bg_gray', 'assets/bg_gray.png');
        game.load.image('grasstile', 'assets/grasstile.png');

        game.load.image('icon_jia', 'assets/icon_jia.png');
        game.load.image('icon_jian', 'assets/icon_jian.png');
        game.load.image('icon_x', 'assets/icon_x.png');
        game.load.image('icon_buy', 'assets/icon_buy.png');
        game.load.image('icon_sale', 'assets/icon_sale.png');

        game.load.image('water', 'assets/water.png');

    };
    this.create = function() {

        game.state.start('main');
    }
}

// 编辑主界面
function Main() {

    // 配置文件
    var config = {
        tools: [
            {x: 150, y: 0, tid: 0, key: "extension"},
            {x: 250, y: 0, tid: 1, key: "store"},
            {x: 350, y: 0, tid: 2, key: "warehouse"},
            {x: 450, y: 0, tid: 3, key: "sow"},
            {x: 550, y: 0, tid: 4, key: "watering"},
            {x: 650, y: 0, tid: 5, key: "shovel"},
            {x: 750, y: 0, tid: 6, key: "harvest"}
        ],
        soil: [
            {x: 50, y: 420, key: 'soil_1'},
            {x: 155, y: 365, key: 'soil_1'}, // 105  -55
            {x: 260, y: 310, key: 'soil_1'},

            {x: 160, y: 480, key: 'soil_1'},  // 110 60
            {x: 265, y: 425, key: 'soil_1'},
            {x: 370, y: 370, key: 'soil_1'},

            {x: 270, y: 540, key: 'soil_1'},
            {x: 375, y: 485, key: 'soil_1'},
            {x: 480, y: 430, key: 'soil_1'},

            {x: 380, y: 600, key: 'soil_1'},
            {x: 485, y: 545, key: 'soil_1'},
            {x: 590, y: 490, key: 'soil_1'},

            {x: 490, y: 660, key: 'soil_1'},
            {x: 595, y: 605, key: 'soil_1'},
            {x: 700, y: 550, key: 'soil_1'}
        ],
        crops: {
            1: {
                name: "萝卜",
                icon: "radish_icon",
                seed_price: 10,
                sale_price: 50,
                harvest_num: 1,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "radish_1"},
                    {time: 2, x: 0, y: -30, key: "radish_2"},
                    {time: 2, x: 0, y: -30, key: "radish_3"},
                    {time: 2, x: 0, y: -30, key: "radish_4"}
                ]
            },
            2: {
                name: "胡萝卜",
                icon: "huradish_icon",
                seed_price: 20,
                sale_price: 20,
                harvest_num: 1,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "huradish_1"},
                    {time: 2, x: 0, y: -30, key: "huradish_2"},
                    {time: 2, x: 0, y: -30, key: "huradish_3"},
                    {time: 2, x: 0, y: -30, key: "huradish_4"}
                ]
            },
            3: {
                name: "土豆",
                icon: "potato_icon",
                seed_price: 20,
                sale_price: 15,
                harvest_num: 5,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "potato_1"},
                    {time: 2, x: 0, y: -30, key: "potato_2"},
                    {time: 2, x: 0, y: -30, key: "potato_3"},
                    {time: 2, x: 0, y: -30, key: "potato_4"},
                    {time: 2, x: 0, y: -30, key: "potato_5"}
                ]
            },
            4: {
                name: "豌豆",
                icon: "peas_icon",
                seed_price: 50,
                sale_price: 10,
                harvest_num: 15,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "peas_1"},
                    {time: 2, x: 0, y: -30, key: "peas_2"},
                    {time: 2, x: 0, y: -30, key: "peas_3"},
                    {time: 2, x: 0, y: -30, key: "peas_4"},
                    {time: 2, x: 0, y: -30, key: "peas_5"}
                ]
            },
            5: {
                name: "辣椒",
                icon: "pepper_icon",
                seed_price: 30,
                sale_price: 25,
                harvest_num: 5,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "pepper_1"},
                    {time: 2, x: 0, y: -30, key: "pepper_2"},
                    {time: 2, x: 0, y: -30, key: "pepper_3"},
                    {time: 2, x: 0, y: -30, key: "pepper_4"},
                    {time: 2, x: 0, y: -30, key: "pepper_5"}
                ]
            },
            6: {
                name: "玉米",
                icon: "corn_icon",
                seed_price: 50,
                sale_price: 30,
                harvest_num: 5,
                process: [
                    {time: 5, x: 0, y: -10, key: "seed"},
                    {time: 5, x: 0, y: -30, key: "corn_1"},
                    {time: 5, x: 0, y: -30, key: "corn_2"},
                    {time: 5, x: 0, y: -30, key: "corn_3"},
                    {time: 5, x: 0, y: -30, key: "corn_4"},
                    {time: 5, x: 0, y: -30, key: "corn_5"}
                ]
            },
            7: {
                name: "茄子",
                icon: "eggplant_icon",
                seed_price: 100,
                sale_price: 50,
                harvest_num: 5,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "eggplant_1"},
                    {time: 2, x: 0, y: -30, key: "eggplant_2"},
                    {time: 2, x: 0, y: -30, key: "eggplant_3"},
                    {time: 2, x: 0, y: -30, key: "eggplant_4"},
                    {time: 2, x: 0, y: -30, key: "eggplant_5"}
                ]
            },
            8: {
                name: "番茄",
                icon: "tomato_icon",
                seed_price: 100,
                sale_price: 40,
                harvest_num: 8,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "tomato_1"},
                    {time: 2, x: 0, y: -30, key: "tomato_2"},
                    {time: 2, x: 0, y: -30, key: "tomato_3"},
                    {time: 2, x: 0, y: -30, key: "tomato_4"},
                    {time: 2, x: 0, y: -30, key: "tomato_5"}
                ]
            },
            9: {
                name: "南瓜",
                icon: "pumpkin_icon",
                seed_price: 200,
                sale_price: 100,
                harvest_num: 3,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "pumpkin_1"},
                    {time: 2, x: 0, y: -30, key: "pumpkin_2"},
                    {time: 2, x: 0, y: -30, key: "pumpkin_3"},
                    {time: 2, x: 0, y: -30, key: "pumpkin_4"},
                    {time: 2, x: 0, y: -30, key: "pumpkin_5"}
                ]
            },
            10: {
                name: "桃子",
                icon: "peach_icon",
                seed_price: 1000,
                sale_price: 20,
                harvest_num: 60,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "peach_1"},
                    {time: 2, x: 0, y: -30, key: "peach_2"},
                    {time: 2, x: 0, y: -30, key: "peach_3"},
                    {time: 2, x: 0, y: -30, key: "peach_4"},
                    {time: 2, x: 0, y: -30, key: "peach_5"}
                ]
            },
            11: {
                name: "西瓜",
                icon: "watermelon_icon",
                seed_price: 1500,
                sale_price: 800,
                harvest_num: 3,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "watermelon_1"},
                    {time: 2, x: 0, y: -30, key: "watermelon_2"},
                    {time: 2, x: 0, y: -30, key: "watermelon_3"},
                    {time: 2, x: 0, y: -30, key: "watermelon_4"},
                    {time: 2, x: 0, y: -30, key: "watermelon_5"}
                ]
            },
            12: {
                name: "草莓",
                icon: "strawberry_icon",
                seed_price: 800,
                sale_price: 50,
                harvest_num: 20,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "strawberry_1"},
                    {time: 2, x: 0, y: -30, key: "strawberry_2"},
                    {time: 2, x: 0, y: -30, key: "strawberry_3"},
                    {time: 2, x: 0, y: -30, key: "strawberry_4"},
                    {time: 2, x: 0, y: -30, key: "strawberry_5"}
                ]
            },
            13: {
                name: "香蕉",
                icon: "banana_icon",
                seed_price: 1500,
                sale_price: 50,
                harvest_num: 50,
                process: [
                    {time: 5, x: 0, y: -10, key: "seed"},
                    {time: 5, x: 0, y: -30, key: "banana_1"},
                    {time: 5, x: 0, y: -30, key: "banana_2"},
                    {time: 5, x: 0, y: -30, key: "banana_3"},
                    {time: 5, x: 0, y: -30, key: "banana_4"},
                    {time: 5, x: 0, y: -30, key: "banana_5"},
                    {time: 5, x: 0, y: -30, key: "banana_6"}
                ]
            },
            14: {
                name: "菠萝",
                icon: "pineapple_icon",
                seed_price: 1000,
                sale_price: 1500,
                harvest_num: 1,
                process: [
                    {time: 2, x: 0, y: -10, key: "seed"},
                    {time: 2, x: 0, y: -30, key: "pineapple_1"},
                    {time: 2, x: 0, y: -30, key: "pineapple_2"},
                    {time: 2, x: 0, y: -30, key: "pineapple_3"},
                    {time: 2, x: 0, y: -30, key: "pineapple_4"},
                    {time: 2, x: 0, y: -30, key: "pineapple_5"},
                    {time: 2, x: 0, y: -30, key: "pineapple_6"}
                ]
            },
            15: {
                name: "樱桃",
                icon: "cherry_icon",
                seed_price: 2000,
                sale_price: 30,
                harvest_num: 100,
                process: [
                    {time: 5, x: 0, y: -10, key: "seed"},
                    {time: 5, x: 0, y: -30, key: "cherry_1"},
                    {time: 5, x: 0, y: -30, key: "cherry_2"},
                    {time: 5, x: 0, y: -30, key: "cherry_3"},
                    {time: 5, x: 0, y: -30, key: "cherry_4"},
                    {time: 5, x: 0, y: -30, key: "cherry_5"},
                    {time: 5, x: 0, y: -30, key: "cherry_6"}
                ]
            }
        },
        store: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        bags: [
            {sid: 1, num: 2},
            {sid: 2, num: 3},
            {sid: 3, num: 0},
            {sid: 4, num: 0},
            {sid: 5, num: 0},
            {sid: 6, num: 0},
            {sid: 7, num: 0},
            {sid: 8, num: 0},
            {sid: 9, num: 0},
            {sid: 10, num: 0},
            {sid: 11, num: 0},
            {sid: 12, num: 0},
            {sid: 13, num: 0},
            {sid: 14, num: 0},
            {sid: 15, num: 0}
        ],
        sow: [
            {sid: 1, num: 2},
            {sid: 2, num: 0},
            {sid: 3, num: 0},
            {sid: 4, num: 0},
            {sid: 5, num: 0},
            {sid: 6, num: 0},
            {sid: 7, num: 0},
            {sid: 8, num: 0},
            {sid: 9, num: 0},
            {sid: 10, num: 0},
            {sid: 11, num: 0},
            {sid: 12, num: 0},
            {sid: 13, num: 0},
            {sid: 14, num: 0},
            {sid: 15, num: 0}
        ]
    };

    var shooseSeed;
    var shooseCrops;
    var solidGroup;
    var box;
    var boxInfo;
    var nowTools;
    var saleDetail;
    var money = 100;
    var moneyText;
    var objThis;

    this.create = function () {
        objThis = this;
        game.physics.startSystem(Phaser.Physics.ARCADE);// 开启物理引擎

        game.add.image(0, 0, 'bg');

        var ifont = {fontSize:'20px',fill:'#f00'};
        game.add.text(game.width-160, 20, "money：",ifont);
        moneyText = game.add.text(game.width-80, 20, money,ifont);

        // 工具栏展示
        var tools = game.add.sprite(140, 0, 'progress2');
        tools.scale.setTo(17, 3);
        tools.alpha = 0.7

        var tools = config.tools;
        for (var i = 0; i < tools.length; i++) {
            var temp = game.add.sprite(tools[i].x, tools[i].y, tools[i].key);
            temp.tid = tools[i].tid;
            temp.inputEnabled = true;
            temp.input.useHandCursor = true;
            temp.input.pixelPerfectClick = true;  // 像素级别的点击
            temp.events.onInputDown.add(this.toolsClick, this);
        }

        // 土地展示
        solidGroup = [];
        var soil_cig = config.soil;
        for (var i = 0; i < soil_cig.length; i++) {
            var soil = soil_cig[i];
            var temp = game.add.sprite(soil.x, soil.y, soil.key);
            temp.inputEnabled = true;
            // temp.input.useHandCursor = true;
            // temp.input.pixelPerfectClick = true;  // 像素级别的点击
            temp.events.onInputDown.add(this.solidClicked, this);
            temp.sid = i;
            temp.crops = null;
            solidGroup.push({soil:temp, crops:null, status:1})
        }
        this.soilChange(0, 2);

        // 生长定时器
        game.time.events.loop(Phaser.Timer.SECOND * 1, this.rowthProcess, this);

        // 盒子初始化
        box = game.add.sprite(250, 100, 'white');
        box.scale.setTo(3.5, 2);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 5; j++) {
                var temp = game.add.sprite(1 + 20 * j, 1 + 34 * i, 'gray');
                temp.scale.setTo(0.18, 0.3);
                temp.alpha = 0.7
                box.addChild(temp);
            }
        }
        boxInfo = game.add.group();
        box.visible = false;

    }

    this.update = function () {

    }

    // 土地点击事件
    this.solidClicked = function (sprite) {
        box.visible = false;
        if(saleDetail){
            saleDetail.kill();
        }
        var solid = solidGroup[sprite.sid];

        if(solid.status == 1 && nowTools){
            this.showMessage(sprite.x, sprite.y, "该土地未开垦！");
            return;
        }
        // 判断操作类型
        switch(nowTools){
            case 0: // 扩建
                if(solid.status != 1){
                    this.showMessage(sprite.x, sprite.y, "无法操作！");
                    return;
                }
                var needNum = sprite.sid * 1000;
                if(money < needNum){
                    this.showMessage(sprite.x, sprite.y, "金币不够！需要"+needNum);
                    return;
                }
                money = money - needNum;
                moneyText.text = money;

                this.soilChange(sprite.sid, 2);
                this.showMessage(sprite.x, sprite.y, "扩建成功！");
                break;
            case 3: // 播种
                if(solid.status == 2){
                    this.showMessage(sprite.x, sprite.y, "请先浇水！");
                    return;
                }
                if (!solid.crops) {
                    if (!shooseCrops) {
                        this.showMessage(sprite.x, sprite.y, "请先选择种子！");
                        return;
                    }
                    // 种子数量减少
                    for (var i = 0; i < config.sow.length; i++) {
                        if (shooseSeed == config.sow[i].sid) {
                            if (config.sow[i].num <= 0) {
                                this.showMessage(sprite.x, sprite.y, "种子数量不足！");
                                shooseCrops = null;
                                changeCursor(0);
                                return;
                            }
                            else {
                                config.sow[i].num--;
                            }
                        }
                    }

                    var soli = config.soil[sprite.sid]
                    var nowCrops = shooseCrops.process[0];
                    var crops = game.add.sprite(soli.x + nowCrops.x, soli.y + nowCrops.y, nowCrops.key);
                    crops.sid = shooseSeed;
                    crops.level = 0;
                    crops.growTime = 0;
                    solid.crops = crops;
                    var process = game.add.sprite(soli.x + 55, soli.y + 75, 'progress2');
                    process.scale.setTo(2, 0.2);
                    process.width = 100;
                    solid.process1 = process;
                    var process = game.add.sprite(soli.x + 55, soli.y + 75, 'progress');
                    process.scale.setTo(2, 0.2);
                    process.width = 0;
                    solid.process2 = process;

                }
                break;
            case 4: // 浇水
                if(solid.status != 2){
                    this.showMessage(sprite.x, sprite.y, "该土地无需浇水！");
                    return;
                }
                this.soilChange(sprite.sid, 3);
                // 浇水动画
                var temp = game.add.sprite(solid.soil.x+60, solid.soil.y-20, "water");
                var tween = game.add.tween(temp).to( { y: solid.soil.y+20 }, 500, "Linear", true).onComplete.add(function(){
                    temp.kill();
                });

                break;
            case 5: // 除草
                if(!solid.crops || solid.crops.sid){
                    this.showMessage(sprite.x, sprite.y, "不能使用！");
                    return;
                }
                this.soilInit(solid);
                break;
            case 6: // 收获
                if(!solid.crops || !solid.crops.finish){
                    this.showMessage(sprite.x, sprite.y, "不能收获！");
                    return;
                }
                var sid = solid.crops.sid;
                var harvest_num = config.crops[sid].harvest_num;
                for(var i=0; i<config.bags.length; i++){
                    if(sid == config.bags[i].sid){
                        config.bags[i].num += harvest_num;
                        break;
                    }
                }
                solid.crops.finish.kill();
                var cinfo = config.crops[solid.crops.sid];
                this.showMessage(solid.crops.x, solid.crops.y+50, "获得"+cinfo.name+"*"+cinfo.harvest_num);
                this.soilChange(sprite.sid, 2);
                // 枯萎植物
                var temp = game.add.sprite(sprite.x , sprite.y-20 , "fade");
                temp.sid = 0;
                solid.crops.kill();
                solid.crops = temp;

                break;
            default:
                return;
                break;

        }
    }

    // 生长
    this.rowthProcess = function () {
        for(var i=0; i<solidGroup.length; i++){
            var solid = solidGroup[i];
            if (solid.crops && solid.crops.sid) {
                var nowCrops = config.crops[solid.crops.sid];
                var stepNum = nowCrops.process.length;
                var nowPro = nowCrops.process[solid.crops.level];
                var time = nowPro.time;
                if ((solid.crops.level > stepNum - 1) || (solid.crops.level == (stepNum - 1) && solid.crops.growTime == time)) {
                    return;
                }
                if (solid.crops.growTime == time) {
                    solid.crops.level += 1
                    nowPro = nowCrops.process[solid.crops.level];
                    var soli = config.soil[i]
                    var crops = game.add.sprite(soli.x + nowPro.x, soli.y + nowPro.y, nowPro.key);
                    crops.sid = solid.crops.sid;
                    crops.level = solid.crops.level;
                    crops.growTime = 0;
                    solid.crops.kill();
                    solid.crops = crops;
                    solid.process2.width = 0;
                }
                else {
                    solid.crops.growTime += 1;
                    var width = 100 * (solid.crops.growTime / time);
                    solid.process2.width = width;
                    if(solid.crops.level == (stepNum - 1) && solid.crops.growTime == time){
                        var icon = config.crops[solid.crops.sid].icon;
                        var temp = game.add.sprite(solid.soil.x+60, solid.soil.y-20, icon);
                        temp.sid = i;
                        // temp.inputEnabled = true;
                        // temp.input.useHandCursor = true;
                        temp.scale.setTo(1.5, 1.5);
                        // temp.events.onInputDown.add(objThis.crapsFinishClick, this);
                        solid.crops.finish = temp;
                        var tween = game.add.tween(temp).to( { y: solid.soil.y-40 }, 1000, "Linear", true);
                        // 重复10次，每次重复时延时1s
                        tween.repeat(50, 200);

                    }
                }
        }

    }
    }

    // 点击工具栏
    this.toolsClick = function (tools) {
        if(saleDetail){
            saleDetail.kill();
        }
        if (box.visible && nowTools == tools.tid) {
            box.visible = false;
            return;
        }
        nowTools = tools.tid;
        switch (tools.tid) {
            case 0: // 点击扩建
                changeCursor(5);
                break;
            case 1: // 点击商店
                changeCursor(0);
                box.x = 150;
                box.y = 100;
                box.visible = true;
                boxInfo.removeAll();

                var store = config.store;
                for (var i = 0; i < store.length; i++) {
                    var icon = config.crops[store[i]].icon;
                    var row = parseInt(i / 5);
                    var col = i % 5;
                    var temp = game.add.sprite(1 + col * 20, 4 + row * 34, icon);
                    temp.sid = store[i];
                    temp.inputEnabled = true;
                    temp.input.useHandCursor = true;
                    temp.scale.setTo(0.35, 0.6);
                    temp.events.onInputDown.add(this.storeSeedClick, this);
                    boxInfo.add(temp);
                }
                box.addChild(boxInfo);
                break;
            case 2: // 点击仓库
                changeCursor(0);
                box.x = 250;
                box.y = 100;
                box.visible = true;
                boxInfo.removeAll();

                var sow = config.bags;
                this.refreshDisplay(sow, 1);
                break;
            case 3: // 点击种子
                changeCursor(0);
                box.x = 350;
                box.y = 100;
                box.visible = true;

                var sow = config.sow;
                this.refreshDisplay(sow, 2);
                break;
            case 4: // 点击水壶
                changeCursor(2);
                break;
            case 5: // 点击铲子
                changeCursor(3);
                break;
            case 6: // 点击手
                changeCursor(4);
                break;
        }

    }

    /**
     *  刷新展示
     */
    this.refreshDisplay = function (sow, type) {
        boxInfo.removeAll();

        var ifont = {fontSize: '8px', fill: '#f00'};
        var n = 0;
        for (var i = 0; i < sow.length; i++) {
            var icon = config.crops[sow[i].sid].icon;
            var num = sow[i].num;
            if (num <= 0) {
                continue;
            }
            var row = parseInt(n / 5);
            var col = n % 5;
            var temp = game.add.sprite(1 + col * 20, 4 + row * 34, icon);
            temp.sid = sow[i].sid;
            temp.inputEnabled = true;
            temp.input.useHandCursor = true;
            temp.scale.setTo(0.35, 0.6);
            if(type == 1){
                temp.events.onInputDown.add(this.chooseCropsClick, this);
            }
            else{
                temp.events.onInputDown.add(this.chooseSeedClick, this);
            }
            boxInfo.add(temp);
            var temp = game.add.text(3 + col * 20, 1 + row * 34, num, ifont);
            boxInfo.add(temp);
            n++;
        }
        box.addChild(boxInfo);
    }

    /**
     * 选择种子
     * @param seed
     */
    this.chooseSeedClick = function (seed) {
        shooseSeed = seed.sid;
        shooseCrops = config.crops[shooseSeed];
        changeCursor(1);
    }

    // 消息提示
    this.showMessage = function(x, y, msg, func) {
        var x = x + 50;
        var y = y + 50;
        var text = game.add.text(x, y, msg,{fontSize:'20px',fill:'#00f'});
        text.alpha = 0; // 不透明度
        game.add.tween(text).to({alpha:1,y:y-50},3000,"Linear",true).onComplete.add(function(){
            text.kill();
            if(func){ func(); }
        });
    }

    // 商店种子点击事件
    this.storeSeedClick = function(seed) {
        if(saleDetail){
            saleDetail.kill();
        }
        var seedInfo = config.crops[seed.sid];
        var row = parseInt((seed.sid-1) / 5);
        var col = (seed.sid-1) % 5;
        saleDetail = game.add.sprite(seed.x + 205 + col * 50, seed.y + 100 + row * 34, "shallowGreen");
        // saleDetail.scale.setTo(1, 1);
        var ifont = {fontSize: '15px', fill: '#f00'};
        var temp = game.add.text(10, 5, "名称："+seedInfo.name, ifont);
        saleDetail.addChild(temp);
        var temp = game.add.text(10, 20, "价格："+seedInfo.seed_price, ifont);
        saleDetail.addChild(temp);
        var temp = game.add.text(10, 35, "收获数："+seedInfo.harvest_num, ifont);
        saleDetail.addChild(temp);
        var temp = game.add.text(10, 50, "售价："+seedInfo.sale_price, ifont);
        saleDetail.addChild(temp);

        var button = game.add.button(30, 70, 'buy', this.buySeed, this);
        button.sid = seed.sid;
        // button.events.onInputDown.add(this.buySeed, this);
        saleDetail.addChild(button);

    }

    // 购买种子
    this.buySeed = function(seed) {
        if(saleDetail){
            saleDetail.kill();
        }

        saleDetail = game.add.sprite(0, 0, "bg_gray");
        saleDetail.inputEnabled = true;
        saleDetail.alpha = 0.8;

        var info = game.add.sprite(400, 200, "grasstile");
        var price = config.crops[seed.sid].seed_price;
        var num = 1;
        var ifont = {fontSize: '20px', fill: '#f00'};
        var temp = game.add.text(80, 60, "单价："+price, ifont);
        info.addChild(temp);
        var numText = game.add.text(125, 110, num, ifont);
        info.addChild(numText);
        var temp = game.add.text(50, 155, "所需金额：", ifont);
        info.addChild(temp);
        var needNum = num*price;
        var needText = game.add.text(150, 155, needNum, ifont);
        info.addChild(needText);
        var temp = game.add.button(200, -10, 'icon_x', function(){
            saleDetail.kill();
        }, this);
        info.addChild(temp);
        var temp = game.add.button(70, 100, 'icon_jian', function(){
            if(num > 1){
                num --;
                numText.text = num;
                needNum = num*price;
                needText.text = needNum;
            }
        }, this);
        temp.scale.setTo(0.6, 0.6);
        info.addChild(temp);
        var temp = game.add.button(160, 100, 'icon_jia', function(){
            num ++;
            numText.text = num;
            needNum = num*price;
            needText.text = needNum;
        }, this);
        temp.scale.setTo(0.6, 0.6);
        info.addChild(temp);
        var temp = game.add.button(80, 190, 'icon_buy', function(){
            if(money < needNum){
                this.showMessage(450, 270, "金币不够！");
                return;
            }
            money = money - needNum;
            moneyText.text = money;
            for(var i=0; i<config.sow.length; i++){
                if(seed.sid == config.sow[i].sid){
                    config.sow[i].num += num;
                    break;
                }
            }
            this.showMessage(450, 270, "购买成功！", function(){
                saleDetail.kill();
            });
        }, this);
        info.addChild(temp);

        saleDetail.addChild(info);
    }

    /**
     *  仓库物品点击事件
     * @param crops
     */
    this.chooseCropsClick = function(crops) {
        if(box){ box.kill(); }
        if(saleDetail){ saleDetail.kill(); }

        saleDetail = game.add.sprite(0, 0, "bg_gray");
        saleDetail.inputEnabled = true;
        saleDetail.alpha = 0.8;

        var cropsInfo; // 物品信息
        for(var i=0; i<config.bags.length; i++){
            if(crops.sid == config.bags[i].sid){
                cropsInfo = config.bags[i];
                break;
            }
        }

        var info = game.add.sprite(400, 200, "grasstile");
        var price = config.crops[crops.sid].sale_price;
        var num = 1;
        var ifont = {fontSize: '20px', fill: '#f00'};
        var temp = game.add.text(80, 60, "售价："+price, ifont);
        info.addChild(temp);
        var numText = game.add.text(125, 110, num, ifont);
        info.addChild(numText);
        var temp = game.add.text(50, 155, "出售获额：", ifont);
        info.addChild(temp);
        var needNum = num*price;
        var needText = game.add.text(150, 155, needNum, ifont);
        info.addChild(needText);
        var temp = game.add.button(200, -10, 'icon_x', function(){
            saleDetail.kill();
        }, this);
        info.addChild(temp);
        var temp = game.add.button(70, 100, 'icon_jian', function(){
            if(num > 1){
                num --;
                numText.text = num;
                needNum = num*price;
                needText.text = needNum;
            }
        }, this);
        temp.scale.setTo(0.6, 0.6);
        info.addChild(temp);
        var temp = game.add.button(160, 100, 'icon_jia', function(){
           if(num < cropsInfo.num){
               num ++;
               numText.text = num;
               needNum = num*price;
               needText.text = needNum;
           }
        }, this);
        temp.scale.setTo(0.6, 0.6);
        info.addChild(temp);
        var temp = game.add.button(80, 190, 'icon_sale', function(){
            money = money + needNum;
            moneyText.text = money;
            cropsInfo.num -= num;
            this.showMessage(450, 270, "出售成功！", function(){
                saleDetail.kill();
            });
            temp.kill();
        }, this);
        temp.scale.setTo(0.8, 0.8);
        info.addChild(temp);

        saleDetail.addChild(info);
    }

    /**
     *  土地初始化
     * @param soil
     */
    this.soilInit = function(soil){
        soil.crops.kill();
        soil.crops = null;
        soil.process1.kill();
        soil.process1 = null;
        soil.process2.kill();
        soil.process2 = null;
    }

    /**
     *  改变土地
     */
    this.soilChange = function(index, status){
        var fsoli = solidGroup[index].soil;
        var temp = game.add.sprite(fsoli.x, fsoli.y, 'soil_'+status);
        temp.inputEnabled = true;
        temp.events.onInputDown.add(this.solidClicked, this);
        temp.sid = index;
        temp.crops = null;
        fsoli.kill();
        solidGroup[index].soil = temp;
        solidGroup[index].status = status;
    }

}

/**
 *  改变鼠标指针图标
 * @param type
 */
function changeCursor(type){
    var game = document.getElementById("game");
    switch(type){
        case 1:
            game.style.cursor = "url(assets/seed.ico),auto";
            break;
        case 2:
            game.style.cursor = "url(assets/watering.ico),auto";
            break;
        case 3:
            game.style.cursor = "url(assets/shovel.ico),auto";
            break;
        case 4:
            game.style.cursor = "url(assets/harvest.ico),auto";
            break;
        case 5:
            game.style.cursor = "url(assets/extension.ico),auto";
            break;
        default:
            game.style.cursor = "";
            break;
    }



}
