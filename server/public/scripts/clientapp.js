var people = [];

$(document).ready(function(){
  // console.log(people);
});


var getPeople = $.ajax({
  type: 'GET',
  url: '/bios',
  success: function(data){
    console.log(data);
  }
});

var getLikes = $.ajax({
  type: 'GET',
  url: '/likes',
  success: function(data){
    console.log(data);
  }
});
