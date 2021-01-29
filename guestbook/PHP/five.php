<?php 
include("conn.php");
$rs=mysql_query('select * from message');
$rscount=mysql_num_rows($rs);
echo '{"status":"10001","rscount":'.$rscount.'}';
?>