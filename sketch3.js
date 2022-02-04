var logo,logoImg,l1bg,l1
var bgimg,play,about,back,popgray,popimg,groundimg,ground
var gameState="wait"
var O1,O2,O3,O4,O5,O6,O7,O8,O9,O10,O11,O12,O12,O13,O14,O15,O16,O17,O18,O19,O20
var log1

function preload(){
bgimg= loadImage("wait.jpg")
logoimg=loadImage("logo.gif")
log1 = loadImage("log1.png")
l1bg = loadImage("L1bg.svg")
//playimg=loadImage("button1.png")
popimg=loadImage("button1.png")
groundimg=loadImage("ground.JPG")
O1 = loadImage("O1.png");
O2 = loadImage("O2.png");
O3 = loadImage("O3.png");
O4 = loadImage("O4.png");
O5 = loadImage("O5.png");
O6 = loadImage("O6.png");
O7 = loadImage("O7.png");
O8 = loadImage("O8.png");
O9 = loadImage("O9.png");
O10 = loadImage("O10.png");
O11 = loadImage("O11.png");
O12 = loadImage("O12.png");
O13 = loadImage("O13.png");
O14 = loadImage("O14.png");
O15 = loadImage("O15.png");
O16 = loadImage("O16.png");
O17 = loadImage("O17.png");
O18 = loadImage("O18.png");
O19 = loadImage("O19.png");
O20 = loadImage("O20.png");

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

ground=createSprite(width/2,height/2)
ground.addImage(groundimg)
ground.visible=false

logo= createSprite(width/2,height/2.25)
logo.addImage(logoimg)
logo.scale=2;

popgray=createSprite(width/2,height/2)
popgray.addImage(log1)
popgray.visible=false
popgray.scale=2

//play= createSprite(100,100)
//play.addImage(playimg)


home=createImg("home.png")
home.position(width/2-100,height-200)
home.size(240,240)
home.hide()


play=createImg("stonebutton.png")
play.position(width/2,height/2)
play.size(240,240)
play.hide()

about=createImg("stonehow.png")
about.position(width/2-200,height/2+45)
about.size(150,150)
about.hide()

/*back=createImg("backbutton.png")
back.position(width/2-200,height/2+45)
back.size(150,150)
back.hide()*/

/*back.createButton("back")
back.position(100,100)
*/


}

function draw(){

    if(gameState==="wait"){
    background(bgimg)
    play.show()
    about.show()
        popgray.visible=false
    home.hide()
}


play.mousePressed(()=>{
    gameState="LEVEL 1"
})


about.mousePressed(()=>{
    gameState="about"
    
})

home.mousePressed(()=>{
gameState="wait"
})

if(gameState==="LEVEL 1"){
    background(l1bg)
    play.hide()
    about.hide()
    logo.visible=false
    home.hide()
}

if(gameState==="about"){
    play.hide()
    about.hide()
    popgray.visible=true
    home.show()
}

    drawSprites();


}