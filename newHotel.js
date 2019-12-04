function addGuest() {
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var a = document.getElementById('roomAdd').value;
    if (a == 1) {
        if(one < 4) {
            var newElement = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liOne";
            position.appendChild(newElement);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            one++;
            console.log(one);
        }
        else if (one == 4) {
            window.alert("Room "+(a-1)+" is full");
        }
    }
    else if (a == 2) {
        if(two < 4) {
            var newElement = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liTwo";
            position.appendChild(newElement);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            two++;
            console.log(two);
        }
        else if (two == 4) {
            window.alert("Room "+(a-1)+" is full");
        }
    }
    else if (a == 3) {
        if(three < 4) {
            var newElement = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liThree";
            position.appendChild(newElement);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            three++;
            console.log(three);
        }
        else if (three == 4) {
            window.alert("Room "+(a-1)+" is full");
        }
    }
    else if (a == 4){
            if (four < 4) {
            var newElement = document.createElement('li');
            var elementText = document.createTextNode(document.getElementById('guestAdd').value);
            newElement.appendChild(elementText);
            var roomChoice = (document.getElementById('roomAdd').value)-1;
            var position = document.getElementsByTagName('ol')[roomChoice];
            newElement.style.color = "white";
            newElement.className = "liFour";
            position.appendChild(newElement);
            document.getElementById('guestAdd').value = "";
            document.getElementById('roomAdd').value = "";
            four++;
            console.log(four);   
        }
        else if (four == 4) {
            window.alert("Room "+(a-1)+" is full");
        }
    }
    else {
        window.alert("Invalid room number")
    }
}