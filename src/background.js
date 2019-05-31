
var interval = null;
var isConfirm = false;
var notice = null;

if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
            Notification.permission = status;
        }
    });
    setClock();
}

function setClock() {
    let time = localStorage.getItem('notice_time');
    alert('新的时间：' + time);
    interval && clearInterval(interval);
    interval = setInterval(function () {
        let now = new Date();
        if (now.getDay() === 0 || now.getDay() === 6) { return; }
        let currentTime = now.getHours();
        if (currentTime < 17 && currentTime >= Number(time.substr(0, 2)) && !isConfirm) {
            notice = new Notification('通知', {
                icon: 'icons/icon.png',
                body: '点饭时间到了!点饭时间到了!点饭时间到了!'
            });
            notice.onclick = function() {
                isConfirm = true;
            };
        }
    }, 30 * 60 * 1000);
}