document.addEventListener('DOMContentLoaded', changeNavbar);
var url = window.location.href;
var urlstring = String(url);
var navItems = document.getElementsByClassName('nav-item');
// console.log(url);
// console.log((navItems)[0]);

function changeNavbar (){
  var page = '';
  var elementNum = 0;
  if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/') {
    page = 'Welcome to Austin';
    elementNum = navItems[0];
  } else if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/restaurants') {
    page = 'Austin Restaurants';
    elementNum = navItems[1];

  } else if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/venues') {
    page =  'Austin Venues';
    elementNum = navItems[2];

  } else if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/pictures') {
    page = 'Austin Pictures';
    elementNum = navItems[3];

  } else if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/videos') {
    page = 'Austin Videos';
    elementNum = navItems[4];

  } else if (urlstring === 'http://flip3.engr.oregonstate.edu:3737/extras') {
    page = 'Austin Extras';
    elementNum = navItems[5];

  } else {
    page = 'Austin 404';
    elementNum = undefined;
  }

  if (elementNum == undefined) {
    document.title = page;
  } else {
    makeChanges(page, elementNum);
  }
}

function makeChanges (page, elementNum) {
  document.title = page;
  elementNum.classList.toggle("active");
  event.preventDefault();
}
