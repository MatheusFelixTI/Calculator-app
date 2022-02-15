const items = document.getElementsByClassName("item-mutavel");
var i;

window.onload = changeTheme();


function changeTheme() {

    if (document.getElementById("range-theme").value == "1") {
        
        var theme1Styles = ['bg-blue-main', 'text-white', 'text-white', 'text-white', 'bg-blue-toogle', 'bg-blue-screen', 'bg-blue-toogle'];

        for (i = 0; i <= theme1Styles.length; i++) {
            items[i].classList.remove('bg-gray-main', 'text-theme2-text', 'bg-gray-toogle', 'bg-gray-screen', 'bg-violet-main', 'bg-violet-toogle', 'text-theme3-text');
            items[i].classList.add(theme1Styles[i]);
            if (i == 5) {
                items[i].classList.add('text-white');
            }
        }

        for(i = 7; i <=24; i++) {
            items[i].classList.remove('text-theme2-text', 'bg-cyan-key', 'border-cyan-key-shadow', 'bg-orange-key', 'border-orange-key-shadow', 'bg-gray-yellow', 'border-gray-orange', 'bg-violet-key', 'border-violet-key-shadow', 'bg-pure-cyan', 'border-soft-cyan', 'bg-dark-violet', 'border-dark-magenta', 'text-dark-blue', 'text-theme3-text', 'text-white');
            if (i == 10 || i == 23) {
                items[i].classList.add('bg-blue-key', 'border-blue-key-shadow');
            } else if (i == 24) {
                items[i].classList.add('bg-red-key', 'border-red-shadow', 'text-white');
            } else {
                items[i].classList.add('bg-grayish-key', 'border-grayish-shadow', 'text-theme1-text');
            }
        }   
    }

    if (document.getElementById("range-theme").value == "2") {

        var theme2Styles = ['bg-gray-main', 'text-theme2-text', 'text-theme2-text', 'text-theme2-text', 'bg-gray-toogle', 'bg-gray-screen', 'bg-gray-toogle'];

        for (i = 0; i <= theme2Styles.length; i++) {
            items[i].classList.remove('bg-blue-main', 'bg-blue-toogle', 'bg-blue-screen', 'text-white', 'bg-violet-main', 'bg-violet-toogle', 'text-theme3-text');
            items[i].classList.add(theme2Styles[i]);
            if (i == 5) {
                items[i].classList.add('text-theme2-text');
            }
        }

        for (i = 7; i<=24; i++) {
            items[i].classList.remove('text-theme1-text', 'bg-grayish-key', 'border-grayish-shadow', 'bg-blue-key', 'border-blue-key-shadow', 'bg-red-key', 'border-red-shadow', 'bg-violet-key', 'border-violet-key-shadow', 'bg-pure-cyan', 'border-soft-cyan', 'bg-dark-violet', 'border-dark-magenta', 'text-dark-blue', 'text-theme3-text', 'text-white');
            if (i == 10 || i == 23) {
                items[i].classList.add('bg-cyan-key', 'border-cyan-key-shadow');
            } else if (i == 24) {
                items[i].classList.add('bg-orange-key', 'border-orange-key-shadow', 'text-white');
            } else {
                items[i].classList.add('bg-gray-yellow', 'text-theme2-text', 'border-gray-orange');
            }
        }
    }

    if (document.getElementById("range-theme").value == "3") {

        var theme3Styles = ['bg-violet-main', 'text-theme3-text', 'text-theme3-text', 'text-theme3-text', 'bg-violet-toogle', 'bg-violet-toogle', 'bg-violet-toogle'];

        for (i = 0; i <= theme3Styles.length; i++) {
            items[i].classList.remove('bg-blue-main', 'bg-blue-toogle', 'bg-blue-screen', 'text-white', 'bg-gray-main', 'text-theme2-text', 'bg-gray-toogle', 'bg-gray-screen');
            items[i].classList.add(theme3Styles[i]);
            if (i == 5) {
                items[i].classList.add('text-theme3-text');
            }
        }

        for (i = 7; i<=24; i++) {
            items[i].classList.remove('text-theme1-text', 'bg-grayish-key', 'border-grayish-shadow', 'bg-blue-key', 'border-blue-key-shadow', 'bg-red-key', 'border-red-shadow', 'text=theme2-text', 'bg-cyan-key', 'border-cyan-key-shadow', 'bg-orange-key', 'border-orange-key-shadow', 'bg-gray-yellow', 'border-gray-orange');
            if (i == 10 || i == 23) {
                items[i].classList.add('bg-violet-key', 'border-violet-key-shadow', 'text-white');
            } else if (i == 24) {
                items[i].classList.add('bg-pure-cyan', 'border-soft-cyan', 'text-dark-blue');
            } else {
                items[i].classList.add('bg-dark-violet', 'text-theme3-text', 'border-dark-magenta');
            }
        }
    }
}

var screen = document.getElementById("screen");
var lastDigit;

function makeDigit(number) {
    if (screen.textContent.length == 0 && (number == '+' || number == '/' || number == 'x' || number == '.') ) {return;}
    if (screen.textContent.length < 15) {
        lastDigit = screen.textContent.substring(screen.textContent.length-1, screen.textContent.length+1);
        if ((lastDigit == '+' || lastDigit == '/' || lastDigit == 'x' || lastDigit == '.' || lastDigit == '-') && (number == '+' || number == '/' || number == 'x' || number == '.' || number == '-')) {return;}
        screen.textContent = screen.textContent + number;
    }
}

function deleteDigit() {
    screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
}

function resultCalc() {
    var first = 0;
    var expressao = [];

    for (i = 0; i <= screen.textContent.length; i++) {
        if ((screen.textContent[i] == '+' || screen.textContent[i] == '-' || screen.textContent[i] ==  'x' || screen.textContent[i] == '/') && i != 0) {
            expressao.push(screen.textContent.substring(first, i));
            first = i + 1;
            expressao.push(screen.textContent[i]);

        }
    }
    expressao.push(screen.textContent.substring(first, screen.textContent.length));
   console.log(expressao.length);

    for (i = 0; i<= expressao.length; i++) {

        if (expressao[i] == '/') {
            result = parseFloat(expressao[i-1]) / parseFloat(expressao[i+1]);
            result = result + "";
            expressao.splice(i-1, 3, result);
            i = -1;
        }

        if (expressao[i] == 'x') {
            result = parseFloat(expressao[i-1]) * parseFloat(expressao[i+1]);
            result = result + "";
            expressao.splice(i-1, 3, result);
            i = -1;
        }

        if (expressao[1] == undefined) {
            break;
        }


    }

    for (i = 0; i<= expressao.length; i++) {

        if (expressao[i] == '+') {
            result = parseFloat(expressao[i-1]) + parseFloat(expressao[i+1]);
            result = result + "";
            expressao.splice(i-1, 3, result);
            i = -1;
        }

        if (expressao[i] == '-' && i != 0) {
            result = parseFloat(expressao[i-1]) - parseFloat(expressao[i+1]);
            result = result + "";
            expressao.splice(i-1, 3, result);
            i = -1;
        }

        if (expressao[1] == undefined) {
            break;
        }

    }
    screen.textContent = expressao[0];
    while (screen.textContent.length > 15) {
        screen.textContent = screen.textContent.substring(0, screen.textContent.length-1);
    }
}

function deleteAll() {
    screen.textContent = "";
}
