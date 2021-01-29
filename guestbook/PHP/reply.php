<?php 
date_default_timezone_set("PRC");
$messageId=@$_POST['messageId'];
$reply=@$_POST['reply'];
include("conn.php");
if(!empty($reply)){
    mysql_query("update message set reply='$reply' where messageId='$messageId'");
    echo '{"status":"10001","msg":"回复留言成功"}';
}else{
    echo '{"status":"10002","msg":"回复留言失败"}';
}
mysql_close();
?>