<?php
// 設定ファイル読み込み
include("../config.php");

/**
 * ディレクトリ直下のファイルを返却する
 */
function getFileList($dir) {
    $files = glob(rtrim($dir, '/') . '/*');
    $list = array();
    foreach ($files as $file) {
        if (is_file($file)) {
            $list[] = "<input type='checkbox'/>".$file;
        }
        if (is_dir($file)) {
            $list[] = "<input type='button' value='+'/>".$file;
        }
    }
    return $list;
}
?>
