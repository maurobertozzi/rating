var aantal = Math.ceil(9*Math.random());
var totalscore = aantal*Math.random()*5;
var uitvoer = document.getElementById('aantal');
var waardering = document.getElementById('waardering');
var sterren = document.querySelectorAll('.geen');


function kleurSter(sterNummer, procent) {
    var naam = 's' + sterNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
    
}


function kleursterren(waardering) {
    for(var i=1; i<6; i++){
        kleurSter(i, waardering*100);
        waardering --;
    }
}

function uitvoeren() {
    uitvoer.innerHTML = aantal;
    waardering.innerHTML = Math.ceil(10*totalscore/aantal)/10;
    kleursterren(Math.ceil(10*totalscore/aantal)/10); 
    
}
uitvoeren();

function verwerk(){
    aantal ++;
    var nummertje = this.getAttribute('data-role');
    totalscore += parseInt(nummertje);
    uitvoeren();
}
for(var i=0; i<sterren.length; i++){
    sterren[i].addEventListener('click', verwerk);
}