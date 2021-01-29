$(function(){
    $("#bt").click(function(){
        $.ajax({
            url:"PHP/liuyan.php",
            type:'POST',
            data:{author:$("#author").val(),title:$("#title").val(),content:$("#content").val(),face:$("#had").val()},
            dataType:"json",
            success:function(data){
                if(data.status=="10001"){
                    alert("留言成功")
                }else{
                    alert("留言失败")
                }
            }
            
        })
    })
    for(var i=1;i<=42;i++){
        $("#had").append(new Option(i+".gif",i+".gif"))
    }
    $("#had").change(function(){
        $("#img1").attr({"src":"img/face/"+$(this).val()})
    })
})