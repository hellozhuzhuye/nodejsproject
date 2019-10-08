var http=require("http");
var url=require("url");
var qs=require("querystring");
function start(){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname;
        var str='';
        if (pathname=="/"){
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            str="<h1>欢迎</h1><a href='/login'>点击登录</a><br/><a href='/register'>点击注册</a></a><br/><a href='/modify'>修改密码</a>";
            response.write(str);
            response.end();
        }
        if(pathname == '/login'){
            str = require('./login').get(request,response);
        }
        if(pathname == '/register'){
            str = require('./login').resgister(request,response);
        }
        if(pathname == '/modify'){
            str = require('./login').modifypwd(request,response);
        }

        if(pathname == '/dores'){
            var s = require('./login');
            var a="";
            request.setEncoding("utf8");
            request.addListener("data",function(postdata){
                var c = decodeURIComponent(postdata);
                var b = qs.parse(c);
                a = b;
            });
            request.addListener("end",function(){
                s.add(request,response,a);
            });
        }
        if(pathname == '/dologin'){
            var s = require('./login');
            var a="";
            request.setEncoding("utf8");
            request.addListener("data",function(postdata){
                var c = decodeURIComponent(postdata);
                var b = qs.parse(c);
                a = b;
            });
            request.addListener("end",function(){
                s.deal(request,response,a);
            });
        }
        if(pathname == '/modifys'){
            var s = require('./login');
            var a="";
            request.setEncoding("utf8");
            request.addListener("data",function(postdata){
                var c = decodeURIComponent(postdata);
                var b = qs.parse(c);
                a = b;
            });
            request.addListener("end",function(){
                s.modifypassword(request,response,a);
            });
        }
    }
    http.createServer(onRequest).listen(8888);
    console.log("127.0.0.1:8888");
}
start();