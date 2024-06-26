let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
    {
    name: "𝑺𝑵𝑨𝑷 𝒙 𝑩𝑨𝑨𝑹𝑰𝑺𝑯𝑬𝑵-𝑴𝑨𝑺𝑯𝑼𝑷",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/[ytmp3.lat]media_mp3_Snap_x_Baarishen_-_Mashup_Full_Version_Gravero_TP.mp3"
  },
  {
    name: "Mehabooba Musical Cover ",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/m9.mp3"
  },
  {
    name: "𝑨𝑹𝑰𝑲𝑰𝑳 𝑷𝑨𝑻𝑯𝑰𝒀𝑬",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/[ytmp3.lat]media_mp3_arikil_pathiye_slowed_and_reverb_Oru_Murai_Vanthu_Paarthaya.mp3"
  },
  {
    name: "Porkanda singam",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/m2.mp3"
  },
  {
    name: "8d Thattathin Marayath All Songs",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/m3.mp3"
  },
  {
    name: "𝑴𝑼𝑵𝑩𝑬 𝑽𝑨𝑨 ",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/y2mate.com - Munbe Vaa Lofi  Tamil Lofi  Sillunu Oru Kadhal  Shreya Ghoshal  AR Rahman  eternaL.mp3"
  },
  {
    name: "𝑳𝑬𝑻 𝑯𝑬𝑹 𝑮𝑶 𝒙 𝑯𝑼𝑺𝑵 𝑽𝑬𝑹𝑺𝑰𝑶𝑵",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/[ytmp3.lat]media_mp3_Let_Her_Go_x_Husn_-_Version_2_Gravero_Mashup_Anuv_Jain.mp3"
  },
  {
    name: "Othai Thamarai",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/m6.mp3"
  },
  {
    name: "Don - Bae Song",
    artist: "𝐁𝐎𝐍𝐃 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
    image: "https://i.imgur.com/v14Dfao.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "./ktb/m7.mp3"
  },   
];

/*
function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  // Construct a color withe the given values
  let bgColor = "rgb(" + black + "," + black + "," +  +black ")";
  // Set the background to that color
  document.body.style.background = "url('https://terror-boy.github.io/bgimg/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg')";
}
*/

function randombg(){
  var random= Math.floor(Math.random() * 7) + 0;
  var bigSize = ["url('https://terror-boy.github.io/bgimg/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://terror-boy.github.io/bgimg/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://i.pinimg.com/originals/b1/12/27/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://i.pinimg.com/originals/f6/00/4e/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://i.pinimg.com/564x/2c/39/8a/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://i.pinimg.com/564x/77/e4/b3/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')",
                 "url('https://terror-boy.github.io/bgimg/a4a238a4-c98c-42f7-bb16-122f7d533119.jpeg?auto=compress')"
                 ];
  document.body.style.background = bigSize[random];
}


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  randombg();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
