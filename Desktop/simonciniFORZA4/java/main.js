var turno = 1;
var count = 0;
let array = [[400, 401, 402, 403, 404, 405],[406, 408, 409, 410, 411, 412],[414, 415, 416, 417, 418, 419],[421, 422, 423, 424, 425, 426],[428, 429, 430, 431, 432, 433],[435, 436, 437, 438, 439, 440],[470, 477, 488, 499, 487, 478]];
var x = 0;
var y = 0;
var bottone;

function gioca(bottone){
    var postemp = 0;
    bottone -= 1;
    if(count != -1){
        disposizione(bottone);
        for(var a = x; a > y; a--){
        if(array[bottone][postemp] != 1 && array[bottone][postemp] != 2){
            if(turno == 1){
                document.getElementById(a).style.backgroundColor = 'aqua';
                document.getElementById('m').innerHTML = "Turno del giocatore 2";
                turno = 2;
                array[bottone][postemp] = 1;
            }else{
                document.getElementById(a).style.backgroundColor = 'fuchsia';
                document.getElementById('m').innerHTML = "Turno del giocatore 1";
                turno = 1;
                array[bottone][postemp] = 2;
            }
            break;
        }
        postemp++;
        }
        count++;
    }
        if(count == 42){
            document.getElementById('m').innerHTML = "PAREGGIO";
            count = -1;
        }

        vittoria = condizionevittoria();
        if( vittoria == 1){
            if(turno == 1){
                document.getElementById('m').innerHTML = "HA VINTO IL GIOCATORE: 2";
            }else{
                document.getElementById('m').innerHTML = "HA VINTO IL GIOCATORE: 1";
            }
            count = -1;
        }
}

function disposizione(bottone){
    if(bottone == 0){
        x = 6;
        y = 0;
    }else if(bottone == 1){
        x = 12;
        y = 6;
    }else if(bottone == 2){
        x = 18;
        y = 12;
    }else if(bottone == 3){
        x = 24;
        y = 18;
    }else if(bottone == 4){
        x = 30;
        y = 24;
    }else if(bottone == 5){
        x = 36;
        y = 30;
    }else if(bottone == 6){
        x = 42;
        y = 36;
    }
}

function condizionevittoria(){
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 6; j++){
            if(array[i][j] == array[i][j+1] && array[i][j+1] == array[i][j+2] && array[i][j+2] == array[i][j+3]){
                return 1;
            }else
            if(array[i][j] == array[i+1][j] && array[i+1][j] == array[i+2][j] && array[i+2][j] == array[i+3][j]){
                return 1;
            }else
            if(array[i][j] == array[i+1][j+1] && array[i+1][j+1] == array[i+2][j+2] && array[i+2][j+2] == array[i+3][j+3]){
                return 1;
            }
        }
    }
    return 0;
}

function reset(){
    window.location.reload()
}