window.onload=function()
{
	//背景画布
	var canvas=document.getElementById('canvas');
	canvas.width=800;
	canvas.height=800;

	var context=canvas.getContext('2d');
    
    //扇形圆背景画布
    var canvas1=document.getElementById('canvas1');
    canvas1.width=400;
    canvas1.height=400;

    var context1=canvas1.getContext('2d');



    //指针圆盘的画布
    var canvas2=document.getElementById('canvas2');
    canvas2.width=140;
    canvas2.height=140;
    var context2=canvas2.getContext('2d');


	//按钮画布
	var canvas3=document.getElementById('canvas3');
	canvas3.width=100;
	canvas3.height=100;
    var context3=canvas3.getContext('2d');
    
	//蓝色背景
	context.beginPath();
	context.fillStyle = "#99ffff";
	context.fillRect(100,30,600,600);
	context.fill();
	context.closePath();
	
	
	//最大的圆
	context.beginPath();
	context.arc(400,350,230,0,2*Math.PI);
	context.closePath();
    context.fillStyle="#ffb20e";
    context.fill();

     
     //第一个扇形
     context1.beginPath();
     context1.moveTo(200,200);
     context1.arc(200,200,200,0,Math.PI*2/6);
     context1.moveTo(200,200);
     context1.arc(200,200,200,Math.PI*12/6,Math.PI*2/6);
     context1.fillStyle="#ff8584";
     context1.fill()
     context1.closePath();

     function draw(angle1,angle2)
     {
        context1.beginPath();
        context1.moveTo(200,200);
        context1.arc(200,200,200,Math.PI*angle1,Math.PI*angle2,true);
        context1.moveTo(200,200);
        context1.arc(200,200,200,0,Math.PI*12/6,false);
        context1.fillStyle="#ffee7b";
        context1.fill()
        context1.closePath();
     }

     function draw2(angle1,angle2)
     {
        context1.beginPath();
        context1.moveTo(200,200);
        context1.arc(200,200,200,Math.PI*angle1,Math.PI*angle2,true);
        context1.moveTo(200,200);
        context1.arc(200,200,200,0,Math.PI*12/6,false);
        context1.fillStyle="#ff8584";
        context1.fill()
        context1.closePath();
     }

     draw(2/6,4/6);
     draw2(4/6,6/6);
     draw(6/6,8/6);
     draw2(8/6,10/6);
     draw(10/6,12/6);
     // //第二个扇形
     // context.beginPath();
     // context.moveTo(400,350);
     // context.arc(400,350,200,Math.PI*2/6,Math.PI*4/6,true);
     // context.moveTo(400,350);
     // context.arc(400,350,200,0,Math.PI*12/6,false);
     // context.fillStyle="#ffee7b";
     // context.fill()
     // context.closePath();
     
     // //第三个扇形
     // context.beginPath();
     // context.moveTo(400,350);
     // context.arc(400,350,200,Math.PI*4/6,Math.PI*6/6,true);
     // context.moveTo(400,350);
     // context.arc(400,350,200,0,Math.PI*12/6,false);
     // context.fillStyle="#ff8584";
     // context.fill()
     // context.closePath();

     // //第四个扇形
     // context.beginPath();
     // context.moveTo(400,350);
     // context.arc(400,350,200,Math.PI*6/6,Math.PI*8/6,true);
     // context.moveTo(400,350);
     // context.arc(400,350,200,0,Math.PI*12/6,false);
     // context.fillStyle="#ffee7b";
     // context.fill()
     // context.closePath();

     // //第五个扇形
     // context.beginPath();
     // context.moveTo(400,350);
     // context.arc(400,350,200,Math.PI*8/6,Math.PI*10/6,true);
     // context.moveTo(400,350);
     // context.arc(400,350,200,0,Math.PI*12/6,false);
     // context.fillStyle="#ff8584";
     // context.fill()
     // context.closePath();

     // //第六个扇形
     // context.beginPath();
     // context.moveTo(400,350);
     // context.arc(400,350,200,Math.PI*10/6,Math.PI*12/6,true);
     // context.moveTo(400,350);
     // context.arc(400,350,200,0,Math.PI*12/6,false);
     // context.fillStyle="#ffee7b";
     // context.fill();
     // context.closePath();

      
     // //抽奖按钮外的指针
     // context2.beginPath();
     // context2.moveTo(18,65);
     // context2.lineTo(70,3);
     // context2.lineTo(123,65);
     // context2.fillStyle="#FF6316";
     // context2.fill();
     

     //抽奖按钮
     context3.beginPath();
     context3.arc(50,50,50,0,2*Math.PI);
     context3.fillStyle="#000";
     context3.fill();

     //抽奖字体
     context3.beginPath();
     context3.font="bold 34px Arial";
     context3.fillStyle="#FE9B00";
     context3.fillText('抽奖',18,60);
     context3.fill();
     

     //一等奖字体
     context1.beginPath();
     context1.font="bold 24px Arial";
     context1.fillStyle="#cb0030";
     context1.fillText('五等奖',160,80);
     context1.fill();
	
    //四等奖字体
     context1.beginPath();
     context1.font="bold 24px Arial";
     context1.fillStyle="#cb0030";
     context1.fillText('二等奖',160,350);
     context1.fill();
    
    //五等奖字体
    context1.beginPath();
    context1.rotate(15*Math.PI/180);
    context1.fillStyle="#cb0030";

    context1.fillText('四等奖',80,120);
    context1.fill();

    //六等奖字体
    context1.beginPath();
    context1.rotate(-5*Math.PI/180);
    context1.fillStyle="#cb0030";
    context1.fillText('一等奖',320,220);
    context1.fill();

    //二等奖字体
    context1.beginPath();
    context1.rotate(-30*Math.PI/180);
    context1.fillStyle="#cb0030";
    context1.fillText('六等奖',210,240);
    context1.fill();
    

    //三等奖字体
    context1.beginPath();
    context1.rotate(-20*Math.PI/180);
    context1.fillStyle="#cb0030";
    context1.fillText('三等奖',-130,280);
    context1.fill();

   canvas3.onmouseover=function()
    {
        canvas3.cursor="pointer";
    }
    canvas3.onclick=function()
    {
        //console.log('abc');
        // var timer=null;
        // timer=setInterval(change,30)
        // var timer;
        // var angle = 0;
        // var result=0
        // var endAngle=parseInt(Math.random()*360*101);
         

        // timer=setInterval(function(){
        // angle+=100;
        // $("#canvas1").rotate(angle);
        // //console.log(angle);
        // endAngle=parseInt(Math.random()*360*101);
        // if(angle>endAngle)
        // {
        //     clearInterval(timer);
        // }
        // console.log(endAngle);
        //  },30);
        
        
    }
   

     //change();
     

     //加载带指针圆的图片
    var img = new Image();
    img.src = "circle.png";
    img.onload = function (){
    context2.save();//保存状态
    // context2.translate(70,70);//设置画布上的(0,0)位置，也就是旋转的中心点
    // context2.rotate(45*Math.PI/180);
    context2.drawImage(img,0,0);//把图片绘制在旋转的中心点，
    context2.restore();//恢复状态
    }
  
    //根据旋转的角度判断获得的奖品
    
    var turnplate={
        restaraunts:[],             //大转盘奖品名称
        //colors:[],                  //大转盘奖品区块对应背景颜色
        outsideRadius:192,          //大转盘外圆的半径
        textRadius:155,             //大转盘奖品位置距离圆心的距离
        insideRadius:68,            //大转盘内圆的半径
        startAngle:0,               //开始角度
        
        bRotate:false               //false:停止;ture:旋转
};
     turnplate.restaraunts = ["一等奖", "二等奖", "三等奖", "四等奖", "五等奖", "六等奖"];
    
    var rotateTimeOut = function (){
        $('#canvas1').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };

    //旋转转盘 item:奖品位置; txt：提示语;
    var rotateFn = function (item, txt){
        var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
        if(angles<270){
            angles = 270 - angles; 
        }else{
            angles = 360 - angles + 270;
        }
        $('#canvas1').stopRotate();
        $('#canvas1').rotate({
            angle:0,
            animateTo:angles+1800,
            duration:8000,
            callback:function (){
                alert(txt);
                turnplate.bRotate = !turnplate.bRotate;
            }
        });
    };

    $('#canvas3').click(function (){
        if(turnplate.bRotate)return;
        turnplate.bRotate = !turnplate.bRotate;
        //获取随机数(奖品个数范围内)
        var item = rnd(1,turnplate.restaraunts.length);
        //奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
        rotateFn(item,turnplate.restaraunts[item-1]);
        /* switch (item) {
            case 1:
                rotateFn(252, turnplate.restaraunts[0]);
                break;
            case 2:
                rotateFn(216, turnplate.restaraunts[1]);
                break;
            case 3:
                rotateFn(180, turnplate.restaraunts[2]);
                break;
            case 4:
                rotateFn(144, turnplate.restaraunts[3]);
                break;
            case 5:
                rotateFn(108, turnplate.restaraunts[4]);
                break;
            case 6:
                rotateFn(72, turnplate.restaraunts[5]);
                break;
            case 7:
                rotateFn(36, turnplate.restaraunts[6]);
                break;
            case 8:
                rotateFn(360, turnplate.restaraunts[7]);
                break;
            case 9:
                rotateFn(324, turnplate.restaraunts[8]);
                break;
            case 10:
                rotateFn(288, turnplate.restaraunts[9]);
                break;
        } */
        console.log(item);
    });


function rnd(n, m){
    var random = Math.floor(Math.random()*(m-n+1)+n);
    return random;
    
}



}