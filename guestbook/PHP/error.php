<?php
date_default_timezone_set("PRC");
require 'JWT.php';
use \Firebase\JWT\JWT;
define('KEY', '1gHuiop975cdashyex9Ud23ldsvm2Xq');
function validate($jwt){
    $res['result']='failed';
    if(empty($jwt)){
    $res['msg']="非法登录";
    return $res['result'];
    }
	try{
		 JWT::$leeway=60;
        $decoded=JWT::decode($jwt, KEY,['HS256']);
        $arr=(array)$decoded;
        if($arr['exp']<time()){
            $res['msg']='请重新登录';
        }else{
            $res['result']='success';
        }
	}catch(Exception $e){
		$res['msg']="Token验证失败，请重新登录";
	}
        return $res['result'];
}
?>