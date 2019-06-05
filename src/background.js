var interval = null;
var isConfirm = false;
var notice = null;

if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission().then(function(result){
        if (result === 'granted') {
            setClock();
        }
    });
} else if (window.Notification && Notification.permission === "granted") {
    setClock();
}

// 定时器
function setClock() {
    interval && clearInterval(interval);
    isConfirm = false;
    interval = setInterval(function () {
        let time = localStorage.getItem('notice_time');
        let now = new Date();
        if (now.getDay() === 0 || now.getDay() === 6) { return; }
        let currentTime = now.getHours();
        if (currentTime < 17 && currentTime >= Number(time.substr(0, 2))) {
            if (!isConfirm) {
                notice = new Notification('通知', {
                    icon: 'icons/icon.png',
                    body: '点饭时间到了!点饭时间到了!点饭时间到了!'
                });
                notice.onclick = function() {
                    isConfirm = true;
                };
            }
        } else {
            isConfirm = false;
        }
    }, 30 * 60 * 1000);
}