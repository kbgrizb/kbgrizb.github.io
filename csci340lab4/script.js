$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      url: "https://poetrydb.org/random",
      dataType: "json",
      success: function(results) {
        $('#poem-title').text(results[0].title);
        $('#poem-author').text("by " + results[0].author);
        $('#poem').text(results[0].lines);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });

    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        $('#fox').attr('src', results.image).show();
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});