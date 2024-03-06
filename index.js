let progress = document.getElementById("progress");
let backWrd = document.getElementById("backwrd");
let forWrd = document.getElementById("forwrd");
let plyMusic = document.getElementById("plyMusic");
let heartIcon = document.getElementById("heartIcon");
let audio = document.getElementById("audio");
// prgsBar.addEventListener("", function () {});

let id;
let arrAudio = [
  "lamba hai madam lamba teri jaan kasam le lamba Dj Raju RjM Manikpur(Sonuskm.in).mp3",
  "Albele Tange Wale(PagalWorld.com.cm).mp3",
  "chill-with-me.mpeg",
  "happy-day-background-vlog-music-148320.mp3",
  "motivational-electronic-distant-132919.mp3",
  "sleepless.mp3",
  "tvari-tokyo-cafe-159065.mp3",
  "tvari-tokyo-cafe-159065.mp3",
  "Tere Hawaale(PagalWorld.com.cm).mp3",
  "Tumse Pyaar Hai(PagalWorld.com.cm).mp3",
  "Raatan Lambiyan (Haryanvi)(PagalWorld.com.cm).mp3",
  "Power(PagalWorld.com.cm).mp3",
  "sleepless.mp3",
  "Shiva Spirit(PagalWorld.com.cm).mp3",
  "Satranga Remix - DJ Chetas(PagalWorld.com.cm).mp3",
  "Satranga Remix - DJ Chetas(PagalWorld.com.cm).mp3",
  "Satranga Remix - DJ Chetas(PagalWorld.com.cm) (1).mp3",
  "Saari Duniya Jalaa Denge(PagalWorld.com.cm).mp3",
  "Jale 2 (Sapna Choudhary)(PagalWorld.com.cm).mp3",
  "Iss Baar Jo Chale Gaye_320(PagalWorld.com.cm).mp3",
  "Ik Tu Hi(PagalWorld.com.cm).mp3",
];
let count = 0;
forWrd.addEventListener("click", () => {
  count++;
  console.log(count);
  let n = arrAudio[count];
  console.log(n);
  let songName = document.getElementById("songName");
  songName.innerHTML = n;
  let audioSong = document.getElementById("audio");
  audioSong.setAttribute("src", n);
  console.log(audioSong);
  plyMusic.classList.add("fa-stop");
  plyMusic.classList.remove("fa-play");
  clearInterval(id);
  audioSong.play();
});
backWrd.addEventListener("click", () => {
  if (count == 0) {
  } else {
    count--;
    console.log(count);
    let n = arrAudio[count];
    console.log(n);
    let audioSong = document.getElementById("audio");
    audioSong.setAttribute("src", n);
    // console.log(''=='',audioSong);

    plyMusic.classList.add("fa-stop");
    plyMusic.classList.remove("fa-play");
    clearInterval(id);

    let songName = document.getElementById("songName");
    songName.innerHTML = n;
    audioSong.play();
  }
});
forWrd.addEventListener("click", () => {});
audio.addEventListener("loadedmetadata", () => {
  let songName = document.getElementById("songName");
  let n = arrAudio[count];
  songName.innerHTML = n;
  let start = document.getElementById("start");
  var formattedTime = convertSecondsToMinutesAndSeconds(
    Math.floor(audio.currentTime)
  );

  start.innerText = formattedTime;
  let end = document.getElementById("end");
  var totalSeconds = Math.floor(audio.duration);
  var formattedTime = convertSecondsToMinutesAndSeconds(totalSeconds);
  end.innerText = formattedTime;
  progress.max = audio.duration;
  progress.value = audio.currentTime;
});
plyMusic.addEventListener("click", function () {
  let audio = document.getElementById("audio");
  if (this.classList.contains("fa-stop")) {
    this.classList.remove("fa-stop");
    this.classList.add("fa-play");
    audio.pause();
  } else {
    this.classList.add("fa-stop");
    this.classList.remove("fa-play");
    audio.play();
  }
});

heartIcon.addEventListener("click", function () {
  if (this.classList.contains("whiteHeart")) {
    this.classList.remove("whiteHeart");
    this.classList.add("newHeart");
  } else {
    this.classList.remove("newHeart");
    this.classList.add("whiteHeart");
  }
});
audio.onplaying = function () {
  id = setInterval(() => {
    let start = document.getElementById("start");

    var totalSeconds = Math.floor(audio.currentTime);
    var formattedTime = convertSecondsToMinutesAndSeconds(totalSeconds);
    start.innerText = formattedTime;
    progress.value = audio.currentTime;
  }, 500);
};
audio.onpause = function () {
  clearInterval(id);
};

progress.addEventListener("change", () => {
  clearInterval(id);
  audio.currentTime = progress.value;
  audio.play();
  plyMusic.classList.add("fa-stop");
  plyMusic.classList.remove("fa-play");
});

function convertSecondsToMinutesAndSeconds(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

// console.log(formattedTime); // Output: 6:40
