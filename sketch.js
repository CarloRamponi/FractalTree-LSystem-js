var angle = 0;
var dir=true;

var axiom = "F";
var angle;
var len;
var word = axiom;

var rules = new Array(1);

rules[0] = {
    a : "F",
    b : "FF+[+F-F-F]-[-F+F+F]"
}

function setup() {
    var browserSize = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    angleMode(DEGREES);
    angle = 25;
    len=150;
    createCanvas(browserSize.width-50, browserSize.height-50);
    background(50);
    var button = createButton("Calcola");
    button.mouseClicked(calc);
    turtle();
}

function calc(){
    len *= 0.5;

    var newWord = "";

    for(var i = 0; i < word.length; i++){
        var found = false;
        for ( var j = 0; j < rules.length; j++){
            if(word.charAt(i)==rules[j].a){
                found = true;
                newWord += rules[j].b;
                break;
            }
        }
        if(!found)
            newWord += word.charAt(i);
    }

    word=newWord;

    turtle();
}

function turtle(){
    stroke(255,100);
    translate(width/2, height);
    for( var i=0; i<word.length; i++){
        switch(word.charAt(i)){
            case "F":
                line(0,0,0,-len);
                translate(0,-len);
                break;
            case "G":
                line(0,0,0,-len);
                translate(0,-len);
                break;
            case "-":
                rotate(-angle);
                break;
            case "+":
                rotate(angle);
                break;
            case "[":
                push()
                break;
            case "]":
                pop();
                break;
        }
    }
}

function draw() {

}
