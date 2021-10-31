//里面放置CSS代码
const string = `.demo{
width:20px;height:20px
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