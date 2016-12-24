/* 処理は必ずここ中に書く */
$(function(){
  /***
   * ファイルリスト取得メソッド
   */
  $(".getfile").click(function(){
    var dir = $(".targetDir").val();
    $.ajax({
      type: 'GET',
      url: '/webmanager/api/filelist.php',
      dataType: 'json',
      data:{
        'dir':dir
      },
      success: function(response) {
        $(".filelist").html(response);
      },
      error: function(response) {
        console.log(response);
      }
    });
  });
});
