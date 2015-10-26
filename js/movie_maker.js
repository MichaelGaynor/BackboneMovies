function MovieMaker(data){
  return `<div><li>${data.Title} is rated ${data.RatingOutOf10} out of 10</li>
  <img src=${data.Image}></div>`;
}

export default MovieMaker;