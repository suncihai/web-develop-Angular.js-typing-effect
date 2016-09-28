var app=angular.module('app',[]);

app.controller('myCtrl',function($scope,$interval,$timeout){
    $scope.typingswitch1=true;
    $scope.typingswitch2=false;

    //switch for bubble,if enter typing app,bubble will be on
    var bubblefly=false;

    $scope.switchtyping=function(value){
        $scope.typingswitch1=value;
        $scope.typingswitch2=!value;
        if($scope.typingswitch2){
           bubblefly=true;
        }else{
           bubblefly=false;
        }
    }

    //typing app
    $scope.writeletter=function($event){
       var LetterDiv=document.getElementById('letter_body');
       //if backspace is pressed, remove the last element
       if($event.which===8){
           var y=LetterDiv.getElementsByClassName("wordstyping");
           if(y.length>=1){
              LetterDiv.removeChild(y[y.length-1]);
           }
       }else{
           //otherwise,create a new element node and parse values to it.
           var newDiv=document.createElement('div');
           var newImg=document.createElement('img');
           newDiv.setAttribute("style","float:left;width:30px;height:30px");
           newDiv.setAttribute("class","wordstyping");
           //different alphabets gif according to key input, event.which is ACSII code.
           switch($event.which){
              case 65:
                 newImg.setAttribute("src","images/words/A.gif");
                 break;
              case 66:
                 newImg.setAttribute("src","images/words/B.gif");
                 break;
              case 67:
                 newImg.setAttribute("src","images/words/C.gif");
                 break;
              case 68:
                 newImg.setAttribute("src","images/words/D.gif");
                 break;
              case 69:
                 newImg.setAttribute("src","images/words/E.gif");
                 break;
              case 70:
                 newImg.setAttribute("src","images/words/F.gif");
                 break;
              case 71:
                 newImg.setAttribute("src","images/words/G.gif");
                 break;
              case 72:
                 newImg.setAttribute("src","images/words/H.gif");
                 break;
              case 73:
                 newImg.setAttribute("src","images/words/I.gif");
                 break;
              case 74:
                 newImg.setAttribute("src","images/words/J.gif");
                 break;
              case 75:
                 newImg.setAttribute("src","images/words/K.gif");
                 break;
              case 76:
                 newImg.setAttribute("src","images/words/L.gif");
                 break;
              case 77:
                 newImg.setAttribute("src","images/words/M.gif");
                 break;
              case 78:
                 newImg.setAttribute("src","images/words/N.gif");
                 break;
              case 79:
                 newImg.setAttribute("src","images/words/O.gif");
                 break;
              case 80:
                 newImg.setAttribute("src","images/words/P.gif");
                 break;
              case 81:
                 newImg.setAttribute("src","images/words/Q.gif");
                 break;
              case 82:
                 newImg.setAttribute("src","images/words/R.gif");
                 break;
              case 83:
                 newImg.setAttribute("src","images/words/S.gif");
                 break;
              case 84:
                 newImg.setAttribute("src","images/words/T.gif");
                 break;
              case 85:
                 newImg.setAttribute("src","images/words/U.gif");
                 break;
              case 86:
                 newImg.setAttribute("src","images/words/V.gif");
                 break;
              case 87:
                 newImg.setAttribute("src","images/words/W.gif");
                 break;
              case 88:
                 newImg.setAttribute("src","images/words/X.gif");
                 break;
              case 89:
                 newImg.setAttribute("src","images/words/Y.gif");
                 break;
              case 90:
                 newImg.setAttribute("src","images/words/Z.gif");
                 break;
              default:
                 break;
           }
           newDiv.appendChild(newImg);
           LetterDiv.appendChild(newDiv);
       }
    }
    
    /*generate a nice bubble every second, and when onmouseover the bubble,bubble element
    will be removed and create new elements such as feathers,hearts and stars*/
    $interval(function(){
       if(bubblefly){
           var bubblerandomleft=Math.ceil(Math.random()*1200);
           var BubbleDiv=document.getElementById('bubble_layer');
           var newDiv2=document.createElement('div');
           var newImg2=document.createElement('img');
           newDiv2.setAttribute("style","position:absolute;left:"+bubblerandomleft+"px;top:850px;width:60px;height:60px");
           newDiv2.setAttribute("class","bubbleflying");
           newImg2.setAttribute("src","images/bubble.png");
           newDiv2.appendChild(newImg2);
           BubbleDiv.appendChild(newDiv2);
           newDiv2.style.transition="ease-in 5s";

           $timeout(function(){newDiv2.style.top="0px";},200);
           var bubbleburst=false;

           newDiv2.onmouseover=function(event){
              var currentX=event.clientX;
              var currentY=event.clientY;
              BubbleDiv.removeChild(newDiv2);
              bubbleburst=true;

              var newBubblefeather1=document.createElement('div');
              var newBubblefeather1img=document.createElement('img');
              newBubblefeather1.setAttribute("style","position:absolute;left:"+currentX+"px;top:"+(currentY-130)+"px;width:90px;height:108px");
              newBubblefeather1.setAttribute("class","bubblefeather1");
              newBubblefeather1img.setAttribute("src","images/bubble_feather1.png");
              newBubblefeather1.appendChild(newBubblefeather1img);
              BubbleDiv.appendChild(newBubblefeather1);

              var newBubblefeather2=document.createElement('div');
              var newBubblefeather2img=document.createElement('img');
              newBubblefeather2.setAttribute("style","position:absolute;left:"+(currentX-100)+"px;top:"+(currentY-80)+"px;width:93px;height:81px");
              newBubblefeather2.setAttribute("class","bubblefeather2");
              newBubblefeather2img.setAttribute("src","images/bubble_feather2.png");
              newBubblefeather2.appendChild(newBubblefeather2img);
              BubbleDiv.appendChild(newBubblefeather2);
              
              var newBubbleheart1=document.createElement('div');
              var newBubbleheart1img=document.createElement('img');
              newBubbleheart1.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY-20)+"px;width:24px;height:24px");
              newBubbleheart1.setAttribute("class","bubbleheart1");
              newBubbleheart1img.setAttribute("src","images/bubble_heart1.png");
              newBubbleheart1.appendChild(newBubbleheart1img);
              BubbleDiv.appendChild(newBubbleheart1);

              var newBubbleheart2=document.createElement('div');
              var newBubbleheart2img=document.createElement('img');
              newBubbleheart2.setAttribute("style","position:absolute;left:"+(currentX-50)+"px;top:"+(currentY+20)+"px;width:16px;height:16px");
              newBubbleheart2.setAttribute("class","bubbleheart2");
              newBubbleheart2img.setAttribute("src","images/bubble_heart2.png");
              newBubbleheart2.appendChild(newBubbleheart2img);
              BubbleDiv.appendChild(newBubbleheart2);

              var newBubblestar1=document.createElement('div');
              var newBubblestar1img=document.createElement('img');
              newBubblestar1.setAttribute("style","position:absolute;left:"+(currentX+10)+"px;top:"+(currentY+40)+"px;width:24px;height:24px");
              newBubblestar1.setAttribute("class","bubblestar1");
              newBubblestar1img.setAttribute("src","images/bubble_star1.png");
              newBubblestar1.appendChild(newBubblestar1img);
              BubbleDiv.appendChild(newBubblestar1);

              var newBubblestar2=document.createElement('div');
              var newBubblestar2img=document.createElement('img');
              newBubblestar2.setAttribute("style","position:absolute;left:"+(currentX-30)+"px;top:"+(currentY-10)+"px;width:34px;height:34px");
              newBubblestar2.setAttribute("class","bubblestar1");
              newBubblestar2img.setAttribute("src","images/bubble_star2.png");
              newBubblestar2.appendChild(newBubblestar2img);
              BubbleDiv.appendChild(newBubblestar2);

              var newBubblestar3=document.createElement('div');
              var newBubblestar3img=document.createElement('img');
              newBubblestar3.setAttribute("style","position:absolute;left:"+(currentX-10)+"px;top:"+(currentY)+"px;width:16px;height:16px");
              newBubblestar3.setAttribute("class","bubblestar1");
              newBubblestar3img.setAttribute("src","images/bubble_star3.png");
              newBubblestar3.appendChild(newBubblestar3img);
              BubbleDiv.appendChild(newBubblestar3);
              
              var falltime=0;
              
              //if onmouseover bubble in the lower part of screen, make it fall faster
              if(currentY<500){
                  falltime=7100;
                  newBubblefeather1.style.transition="ease-in 7s";
                  newBubblefeather2.style.transition="ease-in 6s";
                  newBubbleheart1.style.transition="ease-in 7s";
                  newBubbleheart2.style.transition="ease-in 6s";
                  newBubblestar1.style.transition="ease-in 7s";
                  newBubblestar2.style.transition="ease-in 6.5s";
                  newBubblestar3.style.transition="ease-in 6.5s";
              }else{
                  falltime=3100;
                  newBubblefeather1.style.transition="ease-in 3s";
                  newBubblefeather2.style.transition="ease-in 2s";
                  newBubbleheart1.style.transition="ease-in 3s";
                  newBubbleheart2.style.transition="ease-in 2s";
                  newBubblestar1.style.transition="ease-in 3s";
                  newBubblestar2.style.transition="ease-in 2.5s";
                  newBubblestar3.style.transition="ease-in 2.5s";
              }

              $timeout(function(){
                newBubblefeather1.style.top="800px";
                newBubblefeather2.style.top="800px";
                newBubbleheart1.style.top="830px";
                newBubbleheart2.style.top="840px";
                newBubblestar1.style.top="820px";
                newBubblestar2.style.top="820px";
                newBubblestar3.style.top="820px";
              },200);
              console.log(newBubblefeather1);

              $timeout(function(){
                BubbleDiv.removeChild(newBubblefeather1);
                BubbleDiv.removeChild(newBubblefeather2);
                BubbleDiv.removeChild(newBubbleheart1);
                BubbleDiv.removeChild(newBubbleheart2);
                BubbleDiv.removeChild(newBubblestar1);
                BubbleDiv.removeChild(newBubblestar2);
                BubbleDiv.removeChild(newBubblestar3);
              },falltime);
           }
           
           $timeout(function(){
              if(!bubbleburst){
                 BubbleDiv.removeChild(newDiv2);
              }
           },5200);
       }
    },1000);
})