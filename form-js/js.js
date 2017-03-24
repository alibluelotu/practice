window.onload=function(){

		//用户名正则表达式
		var ret_txt=/^[A-Za-z0-9]{3}$/;
    //密码框正则表达式
    var ret_password=/^[A-Za-z0-9]{10}$/;

		//用户名操作
    var otxt=document.querySelector('.txt');
    var op=otxt.parentNode.querySelector('p');
    //console.log(otxt.parentNode.querySelector('p').innerHTML);
    
    //用户名获取焦点
    otxt.onfocus=function()
    {
      op.style.display="block";
    }
    //用户名失去焦点  	
    otxt.onblur=function()
    {
      if(otxt.value=='')
      {
       op.innerHTML='不能为空!';
      }else if(ret_txt.test(otxt.value))
      {
       op.style.display="none";
      }else
      {
       op.innerHTML='请输入3位数的用户名，以数字，字母组成';
      }
    }

    //密码框操作
    var opassword=document.querySelector('.password');
    var op1=opassword.parentNode.querySelector('p');
    //密码框获得焦点
    opassword.onfocus=function()
    {
      op1.style.display="block";
    }
    //密码框失去焦点
    opassword.onblur=function()
    {
      if(opassword.value=='')
      {
        op1.innerHTML='不能为空！';
      }else if(ret_password.test(opassword.value))
      {
        op1.style.display="none";
      }else
      {
        op1.innerHTML='请输入10位数的用户名，以数字，字母组成';
      }
      }
     
     //密码框2操作
     var opassword2=document.querySelector('.password2');
     var op2=opassword2.parentNode.querySelector('p');
    //密码框2获得焦点
    opassword2.onfocus=function()
    {
      op2.style.display="block";
    }
    //密码框2失去焦点
    opassword2.onblur=function()
    {
      var op1=opassword.parentNode.querySelector('p');
      if(opassword2.value==opassword.value)
      {
        op2.style.display="none";
      }else
      {
        op2.innerHTML="请输入相同的密码"
      }
    }

    //生成随机数操作
    var arrys=new Array(
      '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j', 
            'k','l','m','n','o','p','q','r','s','t', 
            'u','v','w','x','y','z', 
            'A','B','C','D','E','F','G','H','I','J', 
            'K','L','M','N','O','P','Q','R','S','T', 
            'U','V','W','X','Y','Z'       
    );
    var ochange=document.getElementById('change');
    //生成随机数函数
    function change()
    {
      var codes="";
      for(var i=0;i<4;i++)
      {
        var r=parseInt(Math.random()*arrys.length)
        codes+=arrys[r];
      }
      ochange.value=codes;
    }
    change();
    ochange.onclick=function()
    {
      change();
    }
    //提交表单，验证随机数
    var obtn=document.querySelector('.btn');
    var onumber=document.querySelector('.number');
    //console.log(obtn.tagName);
    obtn.onclick=function()
    {
      console.log('a');
      if(onumber.value=="")
        {
           alert('验证码不能为空！');
        }else if(onumber.value.toUpperCase()!=ochange.value.toUpperCase())
        {
           alert('不正确');
           change();
        }else
        {
           alert('正确');
           
        }
    }
}
