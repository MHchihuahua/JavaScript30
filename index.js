const codeBaseUrl = "https://github.com/MHchihuahua/JavaScript30/tree/main/";
const imgBasePath = "images/";
const items = [
  {
    day: "01",
    title: "JavaScript Drum Kit",
    note: "Key events, data-* Attributes",
  },
  {
    day: "02",
    title: "CSS + JS Clock",
    note: "Date, requestAnimationFrame",
  },
  {
    day: "03",
    title: "Playing with CSS Variables and JS",
    note: "CSS Variables, data-* Attributes",
  },
  {
    day: "04",
    title: "Array Cardio Day 1",
    note: "Array methods - filter, map, sort, reduce",
  },
  {
    day: "05",
    title: "Flex Panels Image Gallery",
    note: "CSS Flexbox",
  },
  {
    day: "06",
    title: "AJAX Type Ahead",
    note: "fetch, RegExp",
  },
  {
    day: "07",
    title: "Array Cardio Day 2",
    note: "Array methods - some, every, find, findIndex",
  },
  {
    day: "08",
    title: "Fun with HTML5 Canvas",
    note: "HTML5 Canvas",
  },
  {
    day: "09",
    title: "13 Must Know Dev Tools Tricks",
    note: "The console object",
  },
  {
    day: "10",
    title: "Hold Shift to Check Multiple Checkboxes",
    note: "Checkbox, shift key",
  },
  {
    day: "11",
    title: "Custom HTML5 Video Player",
  },
  {
    day: "12",
    title: "Key Sequence Detection (KONAMI CODE)",
  },
  {
    day: "13",
    title: "Slide in on Scroll",
  },
  {
    day: "14",
    title: "Object and Arrays - Reference VS Copy",
  },
  {
    day: "15",
    title: "LocalStorage and Event Delegation",
  },
  {
    day: "16",
    title: "CSS Text Shadow Mouse Move Effect",
  },
  {
    day: "17",
    title: "Sorting Band Names without articles",
  },
  {
    day: "18",
    title: "Tally String Times with Reduce",
  },
  {
    day: "19",
    title: "Unreal Webcam Fun",
  },
  {
    day: "20",
    title: "Native Speech Recognition",
  },
  {
    day: "21",
    title: "Geolocation based Speedometer and Compass",
  },
  {
    day: "22",
    title: "Follow Along Links",
  },
  {
    day: "23",
    title: "Speech Synthesis",
  },
  {
    day: "24",
    title: "Sticky Nav",
  },
  {
    day: "25",
    title: "Event Capture, Propagation, Bubbling and Once",
  },
  {
    day: "26",
    title: "Stripe Follow Along Dropdown",
  },
  {
    day: "27",
    title: "Click and Drag to Scroll",
  },
  {
    day: "28",
    title: "Video Speed Controller UI",
  },
  {
    day: "29",
    title: "Countdown Clock",
  },
  {
    day: "30",
    title: "Whack A Mole Game",
  },
];

function createItem(day, title, note) {
  const template = document.getElementById("item-template");
  const clone = template.content.cloneNode(true);
  const defaultImage = "images/default.png";

  clone.querySelector(".item-day").textContent = `Day ${day}`;
  clone.querySelector(".item-title").textContent = title;
  clone.querySelector(".item-note").textContent = note || " ";
  clone.querySelector(".item-code").href = `${codeBaseUrl}${day}`;
  clone.querySelector(".item-demo").href = day;
  const img = clone.querySelector(".item-image");

  clone.querySelector(".item-image").src = `${imgBasePath}${day}.png`;
  img.onerror = function () {
    this.src = defaultImage;
    this.onerror = null;
  };

  return clone;
}

function renderItems() {
  const container = document.getElementById("item-container");
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const element = createItem(item.day, item.title, item.note);
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderItems);
