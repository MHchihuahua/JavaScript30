const items = [
  {
    day: "01",
    title: "JavaScript Drum Kit",
    code: "code.html",
    demo: "demo.html",
    imgSrc: "images/01.png",
  },
  {
    day: "02",
    title: "CSS + JS Clock",
    code: "",
    demo: "",
    imgSrc: "images/02.png",
  },
  {
    day: "03",
    title: "Playing with CSS Variables and JS",
    code: "",
    demo: "",
    imgSrc: "images/03.png",
  },
  {
    day: "04",
    title: "Array Cardio Day 1",
    code: "",
    demo: "",
    imgSrc: "images/04.png",
  },
  {
    day: "05",
    title: "Flex Panels Image Gallery",
    code: "",
    demo: "",
    imgSrc: "images/05.png",
  },
  {
    day: "06",
    title: "AJAX Type Ahead",
    code: "",
    demo: "",
    imgSrc: "images/06.png",
  },
  {
    day: "07",
    title: "Array Cardio Day 2",
    code: "",
    demo: "",
    imgSrc: "images/07.png",
  },
  {
    day: "08",
    title: "Fun with HTML5 Canvas",
    code: "",
    demo: "",
    imgSrc: "images/08.png",
  },
  {
    day: "09",
    title: "14 Must Know Dev Tools Tricks",
    code: "",
    demo: "",
    imgSrc: "images/09.png",
  },
  {
    day: "10",
    title: "Hold Shift to Check Multiple Checkboxes",
    code: "",
    demo: "",
    imgSrc: "images/10.png",
  },
  {
    day: "11",
    title: "Custom HTML5 Video Player",
    code: "",
    demo: "",
    imgSrc: "images/11.png",
  },
  {
    day: "12",
    title: "Key Sequence Detection (KONAMI CODE)",
    code: "",
    demo: "",
    imgSrc: "images/12.png",
  },
  {
    day: "13",
    title: "Slide in on Scroll",
    code: "",
    demo: "",
    imgSrc: "images/13.png",
  },
  {
    day: "14",
    title: "Object and Arrays - Reference VS Copy",
    code: "",
    demo: "",
    imgSrc: "images/14.png",
  },
  {
    day: "15",
    title: "LocalStorage and Event Delegation",
    code: "",
    demo: "",
    imgSrc: "images/15.png",
  },
  {
    day: "16",
    title: "CSS Text Shadow Mouse Move Effect",
    code: "",
    demo: "",
    imgSrc: "images/16.png",
  },
  {
    day: "17",
    title: "Sorting Band Names without articles",
    code: "",
    demo: "",
    imgSrc: "images/17.png",
  },
  {
    day: "18",
    title: "Tally String Times with Reduce",
    code: "",
    demo: "",
    imgSrc: "images/18.png",
  },
  {
    day: "19",
    title: "Unreal Webcam Fun",
    code: "",
    demo: "",
    imgSrc: "images/19.png",
  },
  {
    day: "20",
    title: "Native Speech Recognition",
    code: "",
    demo: "",
    imgSrc: "images/20.png",
  },
  {
    day: "21",
    title: "Geolocation based Speedometer and Compass",
    code: "",
    demo: "",
    imgSrc: "images/21.png",
  },
  {
    day: "22",
    title: "Follow Along Links",
    code: "",
    demo: "",
    imgSrc: "images/22.png",
  },
  {
    day: "23",
    title: "Speech Synthesis",
    code: "",
    demo: "",
    imgSrc: "images/23.png",
  },
  {
    day: "24",
    title: "Sticky Nav",
    code: "",
    demo: "",
    imgSrc: "images/24.png",
  },
  {
    day: "25",
    title: "Event Capture, Propagation, Bubbling and Once",
    code: "",
    demo: "",
    imgSrc: "images/25.png",
  },
  {
    day: "26",
    title: "Stripe Follow Along Dropdown",
    code: "",
    demo: "",
    imgSrc: "images/26.png",
  },
  {
    day: "27",
    title: "Click and Drag to Scroll",
    code: "",
    demo: "",
    imgSrc: "images/27.png",
  },
  {
    day: "28",
    title: "Video Speed Controller UI",
    code: "",
    demo: "",
    imgSrc: "images/28.png",
  },
  {
    day: "29",
    title: "Countdown Clock",
    code: "",
    demo: "",
    imgSrc: "images/29.png",
  },
  {
    day: "30",
    title: "Whack A Mole Game",
    code: "",
    demo: "",
    imgSrc: "images/30.png",
  },
];

function createItem(day, title, code, demo, imgSrc) {
  const template = document.getElementById("item-template");
  const clone = template.content.cloneNode(true);
  const defaultImage = "images/default.png";

  clone.querySelector(".item-day").textContent = `Day ${day}`;
  clone.querySelector(".item-title").textContent = title;
  clone.querySelector(".item-code").href = code;
  clone.querySelector(".item-demo").href = demo;
  const img = clone.querySelector(".item-image");

  if (!imgSrc) {
    clone.querySelector(".item-image").src = defaultImage;
  } else {
    clone.querySelector(".item-image").src = imgSrc;
    img.onerror = function () {
      this.src = defaultImage;
      this.onerror = null;
    };
  }

  return clone;
}

function renderItems() {
  const container = document.getElementById("item-container");
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const element = createItem(
      item.day,
      item.title,
      item.code,
      item.demo,
      item.imgSrc
    );
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderItems);
