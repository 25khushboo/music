// ============================== DRUM SECTION ================================
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// ============================MUSIC SECTION ======================================
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("titles");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name : "music1",
    title : "Lotus lane",
    artist : "loyallist",
  },
  {
    name : "music2",
    title : "Sappheiros",
    artist : "Aurora",
  },
  {
    name : "music3",
    title : "Walking ",
    artist : "Tainaya",
  },
];

let isPlaying = false;
// for Play Music

const playMusic = () => {
  isPlaying =true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// for pause function

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime")
};

play.addEventListener('click' , () =>{
     if(isPlaying){
      pauseMusic();
     }
     else{
      playMusic();
     }
});

// Changing the music data

const loadSong =(songs) => {
  console.log(songs.title);
 title.innerHTML = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
}

songIndex = 0;
const nextSong = () => {
  songIndex =(songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex =(songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
