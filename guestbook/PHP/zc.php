<?php
$adminName=@$_POST['adminName'];
$adminPwd=@$_POST['adminPwd'];
include("conn.php");
$rs=mysql_query("select * from admins where adminName='$adminName'");
$flag=mysql_fetch_array($rs);
if($flag<=0){
    mysql_query("insert into admins(adminName,adminPwd) values('$adminName','$adminPwd')");
    echo '{"status":"10001"}';
}else{
    echo '{"status":"10002"}';
}
?>