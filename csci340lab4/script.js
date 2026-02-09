$(document).ready(function () {

  $('#poem-clicker').click(function () {
    getPoem();
  });

  $('#fox-clicker').click(function () {
    getFox();
  });

});


function getPoem() {
  $.ajax({
    url: "https://poetrydb.org/random",
    dataType: "json",
    success: function (results) {
      poem = results[0];
      lines = poem.lines;

      if (lines.length > 40){
        getPoem();
      }else{

      $('#poem-title').text(poem.title);
      $('#poem-author').text("by " + poem.author);
      $('#poem').html(lines.join('<br>'));
      }
    
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
};

function getFox() {
  $.ajax({
    dataType: "json",
    url: "https://randomfox.ca/floof/",
    success: function (results) {
      $('#fox').attr('src', results.image).show();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
};
