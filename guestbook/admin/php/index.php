<?php 
include("../../PHP/conn.php");
$rs=mysql_query("select * from message order by addTime desc");
$json='{"status":"10001","msg":"success","data":[';
$num=mysql_num_rows($rs);
if($num>0){
    while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
	    $json.=json_encode($info).",";  
    }
	echo substr($json,0,strlen($json)-1)."]}";
}else{
	echo '{"status":"10002","msg":"没有记录"}';
}	


?>