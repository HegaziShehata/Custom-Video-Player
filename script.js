window.addEventListener("load", function () {
  myvideo = document.getElementById("myvideo");
  seekbar = document.getElementById("seekbar");
  currenttime = document.getElementById("currenttime");
  durationSpan = document.getElementById("duration");

  myvideo.volume = 1;

  if (myvideo.readyState >= 1) {
    durationSpan.innerHTML = formattime(myvideo.duration);
  }

  myvideo.addEventListener("loadedmetadata", function () {
    durationSpan.innerHTML = formattime(myvideo.duration);
  });

  myvideo.addEventListener("timeupdate", function () {
    currenttime.innerHTML = formattime(myvideo.currentTime);

    seekbar.value = (myvideo.currentTime / myvideo.duration) * 100;
  });
});

function playfun() {
  myvideo.play();
}

function pausefun() {
  myvideo.pause();
}

function stopfun() {
  myvideo.pause();
  myvideo.currentTime = 0;
}

function mutefun() {
  if (myvideo.muted) {
    myvideo.muted = false;
  } else {
    myvideo.muted = true;
  }
}

function loopfun() {
  myvideo.loop = !myvideo.loop;
}

function fullscreenfun() {
  myvideo.requestFullscreen();
}

function speedfun(speed) {
  myvideo.playbackRate = speed;
}

function changevolumefun(e) {
  myvideo.volume = e.target.value;
}

function changeseekbarfun(e) {
  myvideo.currentTime = (e.target.value * myvideo.duration) / 100;
}

function forwardfun() {
  myvideo.currentTime += 10;
}

function backwardfun() {
  myvideo.currentTime -= 10;
}

function changesizefun(size) {
  switch (size) {
    case "small":
      myvideo.style.width = "500px";
      break;

    case "medium":
      myvideo.style.width = "700px";
      break;

    case "large":
      myvideo.style.width = "900px";
      break;
  }
}

function formattime(time) {
  var mins = Math.floor(time / 60);
  var secs = Math.floor(time % 60);

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  return mins + ":" + secs;
}
