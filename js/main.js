/* 処理は必ずここ中に書く */
$(function(){
  $(".getfile").click(function(){
    $.ajax({
      type: 'GET',
      url: '/webmanager/api/filelist.php',
      dataType: 'json',
      data:{
        'dir': $(".targetDir").val()
      },
      success: function(response) {
        $(".filelist").html(response);
        getDirForAjax();
      },
      error: function(response) {
        console.log(response);
      }
    });
  });
  /***
   * ファイルリスト取得メソッド
   */
   function getDirForAjax(target){
     let eventT = $(".dir");
     if(typeof target != "undefined"){
       eventT = target;
     }
     eventT.on("click",function(){
       let origin = $(this);
       let dir = origin.data("dir");
       $.ajax({
         type: 'GET',
         url: '/webmanager/api/filelist.php',
         dataType: 'json',
         data:{
           'dir':dir
         },
         success: function(response) {
           origin.parent("li").append(response);
           origin.val("-");
           getDirForAjax(origin.siblings().find("input[class='dir']"));
           origin.unbind();
           origin.click(function(){
             $(this).siblings("ul:first").toggle();
             if($(this).siblings("ul:first").css("display") === "none" ){
               $(this).val("+");
             }else{
               $(this).val("-");
             }
           });
         },
         error: function(response) {
           console.log(response);
         }
       });
     });
   }
});
