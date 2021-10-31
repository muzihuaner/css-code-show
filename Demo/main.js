//里面放置CSS代码
const string = `
    .skin{
    background-color:#ffe600;}
    .warpper {
    width: 100%;
    height: 165px;
    position: relative;
    /*border: 1px solid red;*/
}

/*画鼻子*/
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}

/*画眼睛*/

.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}

.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}

.eye.left {
    right: 50%;
    margin-right: 90px;
}

.eye.right {
    left: 50%;
    margin-left: 90px;
}

/*画脸*/
.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border-radius: 50px;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}

/*画胡子*/
.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background-color: #fde348;
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

/*画嘴巴*/
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    z-index: -1;
    height: 110px;
    overflow: hidden;
    width: 300px;
}

.lowerLip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/*画舌头*/
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}`
const player = {
    id: undefined,
    setTime: 15,
    i: 1,
    ui: {
        demo1: document.querySelector('.demo1style'),
        demo2: document.querySelector('.demo2')
    },
    init: () => {
        player.bindevets();
        setTime = 15;
        i = 1;
        player.playStart();
    },
    events: {
        '.pause': 'pauseevent',
        '.play': 'playevent',
        '.replay': 'replayevent',
        '.slow': 'slowevent',
        '.middle': 'middleevent',
        '.fast': 'fastevent'
    },
    bindevets: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).addEventListener('click', player[player.events[key]]);
            }
        }
    },
    playStart: () => {
        player.id = setInterval(() => {
            if (player.i > string.length) {
                clearInterval(player.id);
            } else {
                player.ui.demo2.innerText = string.substring(0, player.i);
                player.ui.demo1.innerHTML = string.substring(0, player.i);
                player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
                player.i++;
            }
        }, player.setTime)
    },
    ruintimer: () => {
        clearInterval(player.id);
    },
    playevent: () => {
        player.ruintimer();
        player.playStart();
    },
    pauseevent: () => {
        player.ruintimer();
    },
    replayevent: () => {
        player.ruintimer();
        player.i = 1;
        player.playStart();
    },
    slowevent: () => {
        player.ruintimer();
        player.setTime = 30;
        player.playStart();
    },
    middleevent: () => {
        player.ruintimer();
        player.setTime = 15;
        player.playStart();
    },
    fastevent: () => {
        player.ruintimer();
        player.setTime = 0;
        player.playStart();
    },
}
player.init();