$(function(){
    if(localStorage.getItem("jwt")==null){
        location.href="error.html";
    }else{
        var rscount=0;
        var pagecount=1;
        var page=1;
        // 总条数
        $.ajax({
            url:"PHP/five.php",
            type:"post",
            dataType:"json",
            success: function(data){
                rscount=data.rscount;
                pagecount=Math.ceil(rscount/5);	 
            }
        });
        // 总条数

        //加载默认数据
        $.ajax({
            method:'POST',
            url:'PHP/zy.php',
            dataType:'json',
            success:function(data){
                var str="";
                if(data.status=='10001'){
                    $(".zx").show();
                    $.each(data.data,function(index,value){
                        $("div:eq(1)")
                        .html(
                            str+=`<div class=one>
                                <p>
                                    <img src=img/face/${value.face}>
                                    [<span>${value.author}</span>]
                                    在${value.addTime}说
                                </p>
                                <p>标题:${value.title}</p>
                                <p>内容:${value.content}</p>
                                <p>回复内容:${value.reply}</p>
                                
                                <a href=javascript:; class=rel value=${value.messageId}>回复留言</a>
                            </div>`
                        )


                        
                        //回复留言
                        $(".rel").click(function(){
                            var _this=$(this);
                            $(".zhezhao").fadeIn();
                            $("#rel").fadeIn()
                            $(".rel-bt").one("click",function(){
                                $.ajax({
                                    url:'PHP/reply.php',
                                    method:'POST',
                                    dataType:"json",
                                    data:{messageId:_this.attr("value"),reply:$("#rel-rel").val()},
                                    success:function(data){
                                        if(data.status=='10001'){
                                            alert(data.msg)
                                            location.href="zy.html"
                                        }else{
                                            console.log("失败")
                                        }
                                    }
                                })
                                console.log(_this)
                                // console.log(_this.arrt("data-id"))
                                console.log($("#rel-rel").val())
                            })
                        })
                        //回复留言
                    })
                }
            }
        })
        //加载默认数据


        //上一页
        var flag=true;
        $(".up").click(function(){
            var str="";
            console.log("page=",page);
            
            if(page<1){
                page=1;
            }else{
                if(page>1){
                    page=page-1;
                }else{
                    flag=false;
                }
            }
            if(page>=1 && flag){
                $.ajax({
                    method:'POST',
                    url:'PHP/zy.php',
                    data:{page:page},
                    dataType:'json',
                    success:function(data){
                        var str="";
                        if(data.status=='10001'){
                            $(".zx").show();
                            $.each(data.data,function(index,value){
                                $("div:eq(1)")
                                .html(
                                    str+=`<div class=one>
                                    <p>
                                        <img src=img/face/${value.face}>
                                        [<span>${value.author}</span>]
                                        在${value.addTime}说
                                    </p>
                                    <p>标题:${value.title}</p>
                                    <p>内容:${value.content}</p>
                                    <p>回复内容:${value.reply}</p>
                                    
                                    <a href=javascript:; class=rel value=${value.messageId}>回复留言</a>
                                </div>`
                                )




                                

                                //回复留言
                                $(".rel").click(function(){
                                    var _this=$(this);
                                    $(".zhezhao").fadeIn();
                                    $("#rel").fadeIn()
                                    $(".rel-bt").one("click",function(){
                                        $.ajax({
                                            url:'PHP/reply.php',
                                            method:'POST',
                                            dataType:"json",
                                            data:{messageId:_this.attr("value"),reply:$("#rel-rel").val()},
                                            success:function(data){
                                                if(data.status=='10001'){
                                                    alert(data.msg)
                                                    location.href="zy.html"
                                                }else{
                                                    console.log("失败")
                                                }
                                            }
                                        })
                                        console.log(_this)
                                        // console.log(_this.arrt("data-id"))
                                        console.log($("#rel-rel").val())
                                    })
                                })
                                //回复留言
                            })
                        }
                        
                    }
                    
                })
            }
        })
        //上一页
    

        // 下一页
        $(".down").click(function(){
            var str="";
            console.log("page=",page);
            if(page>pagecount){
                page=pagecount;
            }else{
                if(page<pagecount){
                    page+=1;
                }else{
                    flag=false;
                }
            }
            if(page<=pagecount && flag){
                $.ajax({
                    method:'POST',
                    url:'PHP/zy.php',
                    data:{page:page},
                    dataType:'json',
                    success:function(data){
                        var str="";
                        if(data.status=='10001'){
                            $(".zx").show();
                            $.each(data.data,function(index,value){
                                $("div:eq(1)")
                                .html(
                                    str+=`<div class=one>
                                        <p>
                                            <img src=img/face/${value.face}>
                                            [<span>${value.author}</span>]
                                            在${value.addTime}说
                                        </p>
                                        <p>标题:${value.title}</p>
                                        <p>内容:${value.content}</p>
                                        <p>回复内容:${value.reply}</p>
                                        
                                        <a href=javascript:; class=rel value=${value.messageId}>回复留言</a>
                                    </div>`
                                )




                                //回复留言
                                $(".rel").click(function(){
                                    var _this=$(this);
                                    $(".zhezhao").fadeIn();
                                    $("#rel").fadeIn()
                                    $(".rel-bt").one("click",function(){
                                        $.ajax({
                                            url:'PHP/reply.php',
                                            method:'POST',
                                            dataType:"json",
                                            data:{messageId:_this.attr("value"),reply:$("#rel-rel").val()},
                                            success:function(data){
                                                if(data.status=='10001'){
                                                    alert(data.msg)
                                                    location.href="zy.html"
                                                }else{
                                                    console.log("失败")
                                                }
                                            }
                                        })
                                        console.log(_this)
                                        // console.log(_this.arrt("data-id"))
                                        console.log($("#rel-rel").val())
                                    })
                                })
                                //回复留言
                            })
                        }
                        
                        
                    }
                })
            } 
        })
        // 下一页

        //发布留言
        $("#liuyan").click(function(){
            $(".zhezhao").fadeIn();
            $("#liuyan2").fadeIn(2000);
        })
        $("#bt").click(function(){
            if($("liuyan2").children("input").val()==""){
                alert("留言失败")
            }else{
                $(".zhezhao").fadeOut();
                $("#liuyan2").fadeOut();
                location.href="zy.html"
            }
            
            
        })
        //发布留言


        //取消留言
        $('.zhezhao').click(function(){
            $(".zhezhao").fadeOut();
            $("#liuyan2").slideUp(2000);
            $("#rel").fadeOut()
        })
        //取消留言

        //注销
        $(".zx").click(()=>localStorage.clear())
        //注销


        //欢迎登录
        $("header span").html(localStorage.getItem("userName"))
        //欢迎登录
    }

    
})