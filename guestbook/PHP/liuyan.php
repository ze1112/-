<?php 
date_default_timezone_set("PRC");
$author=@$_POST['author'];
$title=@$_POST['title'];
$content=@$_POST['content'];
$face=@$_POST['face'];
include("conn.php");
if(!empty($author) and !empty($title) and !empty($content)){
    mysql_query("insert into message(author,title,content,face,addTime) values('$author','$title','$content','$face',now())");
    echo '{"status":"10001","msg":"留言成功"}';
}else{
    echo '{"status":"10002","msg":"留言失败"}';
}
mysql_close();
?>