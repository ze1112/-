<?php
date_default_timezone_set("PRC");
require 'JWT.php';
use \Firebase\JWT\JWT;
define('KEY', '1gHuiop975cdashyex9Ud23ldsvm2Xq');
$res['result'] = 'failed';
$action=@$_GET['action'];
if($action=='login'){
	if($_SERVER['REQUEST_METHOD']=="POST"){
		$userName=@$_POST['userName'];
		$pwd=@$_POST['pwd'];
		include("conn.php");
		$rs=mysql_query("select * from admins where adminName='$userName' and adminPwd='$pwd'");
		$num=mysql_num_rows($rs);
		if($num>0){
			define("userName",$userName);
			$nowtime=time();
			$token = [
				'iss' => 'http://localhost',
				'aud' => 'http://localhost',
				'iat' => $nowtime,
				'nbf' => $nowtime + 10,
				'exp' => $nowtime + 600,
				'data' => [
					'userId' => 1,
					'adminName' => $userName
				]
			];
			$jwt=JWT::encode($token,KEY);

			$res['result']="success";
			$res['jwt']=$jwt; 
			$res['userName']=$userName;
		}
	}
	echo json_encode($res);
}else{
	$jwt=@$_SERVER['HTTP_TOKEN'];
	if(empty($jwt)){
		$res['msg']="非法登录";
		echo json_encode($res);
		exit;
	}
	try{
		 JWT::$leeway = 60;
        $decoded = JWT::decode($jwt, KEY, ['HS256']);
        $arr = (array)$decoded;
        if ($arr['exp'] < time()) {
            $res['msg'] = '请重新登录';
        } else {
            $res['result'] = 'success';
            $res['info'] = $arr;
        }

	}catch(Exception $e){
		$res['msg']="Token验证失败，请重新登录";
	}
	echo json_encode($res);
}
?>