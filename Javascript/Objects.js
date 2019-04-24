var movies = [  
  {
    title: "Infinity War",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Glass",
    hasWatched:False,
    rating: 4
  }

  ]

movies.forEach(function(movie){
    console.log(buildString(movie));
});
  
 

function buildString(movie){
    var result = "You have ";
  if (movie.hasWatched) { 
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}