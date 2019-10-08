exports.get = function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    var str = "<form action='/dologin' method='post'>"+
        "帐号:<input type ='text' name='name'><br/><br/>"+
        "密码:<input type ='password' name='password'><br/><br/>"+
        "  <input type ='submit' value='提交'></form>";
    res.write(str);
    res.end();
}
exports.resgister=function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    var str = "<form action='/dores' method='post'>"+
        "帐号:<input type ='text' name='name'><br/><br/>"+
        "密码:<input type ='password' name='password'><br/><br/>"+
        "  <input type ='submit' value='提交'></form>";
    res.write(str);
    res.end();
}
exports.modifypwd=function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    var str = "<form action='/modifys' method='post'>"+
        "帐号:<input type ='text' name='name'><br/><br/>"+
        "原密码:<input type ='password' name='oldpwd'><br/><br/>"+
        "新密码:<input type ='password' name='password'><br/><br/>"+
        "  <input type ='submit' value='提交'></form>";
    res.write(str);
    res.end();
}

exports.deal = function(req,res,data){
    var mysql = require('./mysql');
    var name = data.name;
    var password = data.password;
    console.log(data);
    var sql = "SELECT * FROM UserInfoTest WHERE User_Name = '"+name+"' AND User_Password = '"+password+"'";
    mysql.query(sql,function(data){
        showpage(req,res,data);
    });
}
exports.add = function(req,res,data){
    var mysql = require('./mysql');
    var name = data.name;
    var password = data.password;
    var sql = "INSERT INTO UserInfoTest(User_Name,User_Password) values('"+name+"', '"+password+"')";
    mysql.adduser(sql,function(data){
        showres(req,res,data);
    });
}
exports.modifypassword = function(req,res,data){
    console.log(data);
    var mysql = require('./mysql');
    var name = data.name;
    var oldpwd = data.oldpwd;
    var password = data.password;
    var isnull=false;
    if(data.name == '' || data.oldpwd == '' || data.password == ''){
        isnull=true;    
    }
  
    var sql = "UPDATE UserInfoTest SET User_Password='"+password+"' WHERE (User_Name = '"+name+"' AND User_Password = '"+oldpwd+"')";
    mysql.modifyuser(sql,function(data){
    showmodify(req,res,data,isnull);})
}

exports.dealget = function(req,res,data){
    var mysql = require('./mysql');
    var id = data.id;
    var sql = "SELECT * FROM UserInfoTest WHERE User_ID = '"+id+"'";
    mysql.query(sql,function(data){
        modifyview(req,res,data);
    });
}

function showpage(req,res,data){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(data != ''){
        var str = "<h1>登录成功！</h1>";
        
    }else{
        var str = "<h1>用户名或密码错误，登录失败！</h1>";
        str+="<a href='/login'>返回登录</a>";
    }
    res.write(str);
    res.end();
}

function showres(req,res,data){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(data != ''){
        var str = "<h1>注册成功</h1>";
        str+="<a href='/login'>去登录</a>";
    }else{
        var str = "<h1>注册失败</h1>";
        str+="<a href='/register'>返回注册</a>";
    }
    res.write(str);
    res.end();
}


function showmodify(req,res,data,isnull){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(isnull){
        var str = "<h1>修改密码失败</h1>";
        str+="<a href='/modify'>返回修改密码</a>";
        
    }else{
        var str = "<h1>修改密码成功</h1>";
        str+="<a href='/login'>去登录</a>";
       
    }
    res.write(str);
    res.end();
}


