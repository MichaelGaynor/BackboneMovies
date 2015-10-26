import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

$.ajaxSetup({
  headers:{
    'X-Parse-Application-Id': 'HLyprOtO04VKlQ0i2G51lTHwb1a2zDjOjhbjMDvR',
    'X-Parse-REST-API-Key': 'PvuKW4U4Kd0RLix0G0IOG3IYlJVShxV4ctjJVMlP'
  }
});

import MovieCollection from './movie_collection';
import MovieMaker from './movie_maker';

let movie = new MovieCollection();

function renderMovie(){
  let $ul = $('<ul>Awesome Movies You Should Watch</ul>');
  movie.each(function(film){
    let data = film.toJSON();
    let $li = $(MovieMaker(data));
    $ul.append($li);
  });
  $('body').html($ul);
}
movie.fetch().then(renderMovie);

console.log(renderMovie);