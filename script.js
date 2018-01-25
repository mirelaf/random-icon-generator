$(document).ready(function() {
  $("#newQuote").on("click", function(){
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?") 
    .done(function(json) {
   $(".quote-text").html('"'+json.quoteText+'"');   
   $(".quote-author").html("- "+json.quoteAuthor);
   $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text="+json.quoteText+" - "+json.quoteAuthor);
  })
    .fail(function() {
    $(".quote-text").html("<p>Oups! There was an error somewhere")
  })
   });
});

