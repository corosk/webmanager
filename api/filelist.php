<?php
// 設定ファイル読み込み
include('../config.php');
// fileのfunction取得
include('../service/file.php');
/**
 * パラメータで送られてきたディレクトリ直下の
 * ファイルを返却する
 */
// ディレクトリのパスを記述
$dir = $_GET['dir'];

$list = getFileList($dir);

$resStr = '';

$resStr = "<ul>";

foreach($list as $f){
	$resStr = $resStr."<li>";
	$resStr = $resStr.$f;
	$resStr = $resStr."</li>";
}

echo json_encode($resStr);
?>
