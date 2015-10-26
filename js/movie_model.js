import Backbone from 'backbone';

let MovieModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/GoodMovies',
  idAttribute: 'objectId'
});

export default MovieModel