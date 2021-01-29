$(()=>{
    function lod(){
        $.ajax({
            method:'POST',
            url:'php/index.php',
            dataType:'json',
            success:function(data){
                var str="";
                if(data.status=='10001'){
                    $.each(data.data,function(index,value){
                        $("div")
                        .html(
                            str+=`<div class=one>
                                <p>
                                    <span>${value.author}</span>
                                </p>
                                <p>标题:${value.title}</p>
                                <p>内容:${value.content}</p>
                                <a href=javascript:; class=del  value=${value.messageId}>删除留言</a>
                                
                            </div>`
                        )
                        //删除留言
                        $(".del").click(function(){
                            $.ajax({
                                url:'php/dlete.php',
                                method:'POST',
                                dataType:"json",
                                data:{messageId:$(this).attr("value")},
                                success:function(data){
                                    if(data.status=='10001'){
                                        alert("删除成功")
                                        lod()
                                    }
                                }
                            })
                        })
                        //删除留言
                    })
                }
            }
        })
    }
    lod()
})