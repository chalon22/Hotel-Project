function addGuest() {
    var one = document.getElementsByClassName('liOne').length;
    var two = document.getElementsByClassName('liTwo').length;
    var three = document.getElementsByClassName('liThree').length;
    var four = document.getElementsByClassName('liFour').length;
    var five = document.getElementsByClassName('liFive').length;
    var six = document.getElementsByClassName('liSix').length;
    var a = document.getElementById('roomAdd').value;
    if (a == 1) {
        if(one < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            newElementTwo.appendChild(logText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liOne";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[6];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            one++;
            console.log(one);
        }
        else if (one == 4) {
            window.alert("Room 1 is full");
        }
    }
    else if (a == 2) {
        if(two < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            newElementTwo.appendChild(logText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liTwo";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[6];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            two++;
            console.log(two);
        }
        else if (two == 4) {
            window.alert("Room 2 is full");
        }
    }
    else if (a == 3) {
        if(three < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            newElementTwo.appendChild(logText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liThree";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[6];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            three++;
            console.log(three);
        }
        else if (three == 4) {
            window.alert("Room 3 is full");
        }
    }
    else if (a == 4){
        if (four < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd'));
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            newElementTwo.appendChild(logText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liFour";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[6];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            four++;
            console.log(four);   
        }
        else if (four == 4) {
            window.alert("Room 4 is full");
        }
    }
    else if (a == 5) {
        if (five < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(doucment.getElementById('guestAdd').value);
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liFive";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[6];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            five++;
            console.log(five);   
        }
        else if (five == 4) {
            window.alert("Room 5 is full");
        }
    }
    else if (a == 6) {
        if (six < 4) {
            var timeStamp = String(new Date());
            var newElement = document.createElement('li');
            var newElementTwo = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            var logText = document.createTextNode(document.getElementById('guestAdd').value+" "+timeStamp);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liSix";
            position.appendChild(newElement);
            var positionTwo = document.getElementsByTagName('ol')[5];
            positionTwo.appendChild(newElementTwo);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            six++;
            console.log(six);   
        }
        else if (six == 4) {
            window.alert("Room 6 is full");
        }
    }
    else {
        window.alert("Invalid room number")
    }
}
function removeGuest() {
    var userRoom = document.getElementById('roomRemove').value;
    var userGuest = document.getElementById('guestRemove').value;
    var a = document.getElementsByTagName('ol')[userRoom];
    var b = a.parentNode;
    b.removeChild(a);
    document.getElementById('roomRemove').value = "";
    document.getElementById('guestRemove').value = "";
}
function removeAll() {
    var listClear = documen.getElementsByTagName('ol')[document.getElementById('roomAdd').value-1];
    listClear.innerHTML = "";
}
function scrollDown() {
    window.scroll(0,1000);
}