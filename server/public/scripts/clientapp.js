
var people = [];
var likes = [];

$(document).ready(function(){
  appendPeople(); // :)
  $('.table').on('click', '.like', function(){
    console.log("CLIKCED!");
  });
});

var getPeople = $.ajax({
  type: 'GET',
  url: '/bios',
  success: function(data){
    for (var i = 0; i < data.length; i++){
      people.push(data[i]);
    }
  }
});

var getLikes = $.ajax({
  type: 'GET',
  url: '/likes',
  success: function(data){
    likes.push(data);
  }
});

function appendPeople(){
  for(var i=0; i < people.length; i++){
    var name = people[i].name;
      $('.table').last().append('<tr class=""><td>' + name + '</td><td>' + people[i].bio + '</td><td>' + likes[0][i].likes + '<button class="like">LIKE</td></tr>');
  }
}

function addlike(){

};
