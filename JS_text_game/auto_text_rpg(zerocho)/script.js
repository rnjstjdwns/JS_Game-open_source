function logMessage(msg, color) {
    if(!color) {
        color = 'black'; //만약 색이 없으면 검정색으로성정
    }
    var div = document.createElement('div'); //div 생성
    div.innerHTML = msg;//메세지를 div 안에 넣기
    div.style.color = color;//div의 스타일을 매개변수 color로 지정
    document.getElementsByID('log').appendChild(div);
}

var gameover = false;
var battle = false;
function Character(name, hp, att) { //캐릭터 함수 선언(이름, 체력, 공격력을 매개변수로 가져옴)
    this.name = name;
    this.hp = hp;
    this.att = att;
}

Character.prototype.attecked = function(damage) {
    this.hp -= damage;
    logMessage(this.name+'의 체력의 '+this.hp+'가 되었습니다');
    if(this.hp <= 0) {
        battle = false;
    }
}