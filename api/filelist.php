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
$dir = "/Library/WebServer/Documents/cwm/";

$list = getFileList($dir);

echo "<ul>";

foreach($list as $f){
	echo "<li>";
	echo $f;
	echo "</li>";
}

?>
