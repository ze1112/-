$(()=>{
    $("#zc").click(function(){
        if($("#adminName").val()==""){
            alert("用户名或密码不能为空");
        }else{
            if($("#adminPwd").val() != $("#adminPwd2").val()){
                alert("两次密码不一致");
            }else{
                $.ajax({
                    url:"PHP/zc.php",
                    method:"POST",
                    dataType:"json",
                    data:{adminName:$("#adminName").val(),adminPwd:$("#adminPwd").val()},
                    success:(data)=>{
                        if(data.status=="10001"){
                            alert("注册成功");
                            location.href="dl.html";
                        }else{
                            alert("该用户名已被占用");
                        }
                    }
                })
            }
        }
        
    })
})