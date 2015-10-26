import Backbone from 'backbone';
import MovieModel from './movie_model';

let MovieCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/GoodMovies',
  model: MovieModel,

  parse: function(data) {
    return data.results;
  }
});

export default MovieCollection;