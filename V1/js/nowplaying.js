$( document ).ready(function() {
  var vm = new Vue({
    el: "#app",
    data: {
      nowPlaying: {}
    }
  });
  var nowPlayingUrl = "https://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a"

  $.ajax({
    url: nowPlayingUrl,
    type: "get",
    dataType: "jsonp",
    success: function(data) {
      console.log("要求資料成功");
      vm.nowPlaying = data.entries;
    },
    error: function() {
      console.log("要求資料失敗");
    }
  });
});