
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time
var bg ;

//var backgroundImg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    getBackgroundImg();
}


function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


    
    fill("black");
     textSize(30);
     if(hour>=12){
          text("Time :"+ hour%12 + " AM", 10,100);
         }
    else if(hour==0){ 
        text("Time :12PM",100,100);
     }
    else{
         text("Time : "+ hour%12 + " PM", 10,50); 
        }
 
}

    async function getBackgroundImg(){
        

   
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
     var datetime=responseJSON.datetime;
     var hour=datetime.slice(11,13);

     
    
    if(hour>=08 && hour<=09){
     bg="sunrise1.png";
    }
    else if(hour>=09 && hour<=10){
        bg="sunrise2.png";
    }
    else if(hour>=10 && hour<=11){
        bg="sunrise3.png";
    }
    else if(hour>=11 && hour<=12){
        bg="sunrise4.png";
    }       
    else if(hour>=12 && hour<=13){
        bg="sunrise5.png";
    }  
    else if(hour>=13 && hour<=14){
        bg="sunrise6.png";
    }  
    else if(hour>=15 && hour<=17){
        bg="sunset7.png";
    } 
    else if(hour>=17 && hour<=19){
        bg="sunset7.png";
    }
     else if(hour>=19 && hour<=21){
        bg="sunset8.png";
    }
     else if(hour>=21 && hour<=23){
        bg="sunset9.png";
    } 
    else if(hour>=23 && hour<=02){
        bg="sunset10.png";
    } 
    else if(hour>=02 && hour<=05){
        bg="sunset11.png";
    }
     else if(hour>=05 && hour<=08){
        bg="sunset12.png";
    }
 

      
    backgroundImg=loadImage(bg);
    }


    