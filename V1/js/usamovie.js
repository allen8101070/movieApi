$( document ).ready(function() {
  var vm = new Vue({
    el: "#app",
    data: {
      usamovie: {}
    }
  });
  var usamovieUrl = "https://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a"

  $.ajax({
    url: usamovieUrl,
    type: "get",
    dataType: "jsonp",
    success: function(data) {
      console.log("要求資料成功");
      vm.usamovie = data.subjects;
    },
    error: function() {
      console.log("要求資料失敗");
    }
  });
});