var names = [];

$(document).ready(function(){
  console.log(names);
});


var getPeople = $.ajax({
  type: 'GET',
  url: '/bios',
  success: function(data){
    for (var i = 0; i < data.length; i++){
      names.push(data[i].name);
    }
  }
});

var getLikes = $.ajax({
  type: 'GET',
  url: '/likes',
  success: function(data){
  }
});
