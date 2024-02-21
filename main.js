function addButtons() {
    var mainContent = document.getElementById('main-content');
    var content = document.createElement('div');
    content.className = 'content';

    for (var j = 0; j < 2; j++) {
        var buttons = document.createElement('div');
        buttons.className = 'buttons';

        for (var i = 0; i < 3; i++) {
            var button = document.createElement('button');
            button.className = 'button';
            buttons.appendChild(button);
        }
        content.appendChild(buttons);
    }
    mainContent.appendChild(content);
}

for (var i = 0; i < 3; i++) {
    addButtons();
}

var isAdding = false;

window.onscroll = function() {
    var contents = document.getElementsByClassName('content');
    if (!isAdding && (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        isAdding = true;

        setTimeout(function() {
            for (var i = 0; i < 3; i++) {
                addButtons();
            }
            isAdding = false;
        }, 200);
    }
};
