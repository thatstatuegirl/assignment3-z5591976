function mypopupMessages() {
    window.open("draftMessages.html", "messagesWindow", "location=1,status=1,scrollbars=1,width=525,height=245").moveTo(365, 220);
}

function mypopupEmail() {
    window.open("draftEmail.html", "emailWindow", "location=1,status=1,scrollbars=1,width=645,height=385").moveTo(305, 145);
}


window.addEventListener('DOMContentLoaded', function() {
  var img = document.getElementById('windowsBtnImg');
  img.style.top = '47px';
  img.style.opacity = '1';
});

window.addEventListener('beforeunload', function () {
    var btn = document.getElementById('windowsBtnImg');
    if (btn) {
        btn.style.top = '150px';
        btn.style.opacity = '0';
    }
});

