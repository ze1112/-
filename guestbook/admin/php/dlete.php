<?php 
include("../../PHP/conn.php");
$messageId=@$_POST['messageId'];
$rs=mysql_query("delete from message where messageId='$messageId'");               
if($rs){
    echo '{"status":"10001","msg":"删除成功"}';
}
mysql_close();
?>