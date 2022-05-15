// JavaScript inspired from W3Schools, Delftstack and various other sources
var i = 0;
var txt = 'Hello World!'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

typeWriter()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//to make the divs clickable and link to the websites
window.onload = function () {
    var zoom = document.getElementById("Zoom");
    zoom.style.cursor = "pointer";
    zoom.onclick = goTo30MFF;

  var com = document.getElementById("Comic");
    com.style.cursor = "pointer";
    com.onclick = goToComic;

  var sound = document.getElementById("Sound");
    sound.style.cursor = "pointer";
    sound.onclick = goToSound;

  var vid = document.getElementById("Video");
    vid.style.cursor = "pointer";
    vid.onclick = goToVideo;
}

function goTo30MFF() {
    window.open("https://vicka1228.github.io/30MFF/", "_blank");
}

function goToComic() {
    window.open("https://itserror404.github.io/comicstrip/", "_blank");
}

function goToSound() {
    window.open("https://vicka1228.github.io/commlab_sound/", "_blank");
}

function goToVideo() {
    window.open("https://itserror404.github.io/video-assignment/", "_blank");
}

//scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
