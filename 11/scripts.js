const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const currentTimeText = player.querySelector(".player__time .current");
const durationTimeText = player.querySelector(".player__time .duration");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  updateButton();
}

function updateButton() {
  const icon = video.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function formatTime(time) {
  if (!isFinite(time) || isNaN(time)) return "--:--";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function updateDuration() {
  if (!isFinite(video.duration) || isNaN(video.duration)) return;
  durationTimeText.textContent = formatTime(video.duration);
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateRangeValue() {
  video[this.name] = this.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  currentTimeText.textContent = formatTime(video.currentTime);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("loadedmetadata", updateDuration);
video.addEventListener("durationchange", updateDuration);
video.addEventListener("play", updateDuration);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);

toggle.addEventListener("click", togglePlay);
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("input", updateRangeValue);
});

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", (e) => {
  mouseDown = true;
  scrub(e);
});
progress.addEventListener("mousemove", (e) => {
  if (mouseDown) scrub(e);
});
progress.addEventListener("mouseleave", () => (mouseDown = false));
progress.addEventListener("mouseup", () => (mouseDown = false));
