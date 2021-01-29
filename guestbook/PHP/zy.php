<?php
date_default_timezone_set("PRC");
$page=@$_POST['page'];
if(empty($page)){
    $page=1;
}
if($page<1){
   $page=1;
}
include("conn.php");
$rs=mysql_query("select * from message order by addTime desc");
$json='{"status":"10001","msg":"success","data":[';
$num=mysql_num_rows($rs);
$pagecount=ceil($num/5);
if($page>=$pagecount){
    $page=$pagecount;
}
mysql_data_seek($rs,($page-1)*5);
if($num>0){
    for($i=1;$i<=5;$i++){
        if($info=mysql_fetch_array($rs)){
            $json.=json_encode($info).",";
        }
    }
    echo substr($json,0,-1)."]}";
}else{
    echo '{"status":"10002","msg":"没有记录"}';
}
?>
