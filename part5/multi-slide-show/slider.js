const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

// (function () {
//   const itemWrapperEl = select(".item-wrapper"),
//     leftBtnEl = select("#left-btn"),
//     reightBtnEl = select("#right-btn");
//   function moveSlides(direction) {
//     const item = itemWrapperEl.querySelector(".item"),
//       itemMargin = parseFloat(getComputedStyle(item).marginRight),
//       itemWidth = itemMargin + item.offsetWidth + 2;

//     let itemCount = Math.floor(itemWrapperEl.scrollLeft / itemWidth);

//     if (direction === "left") {
//       itemCount = itemCount - 1;
//     } else {
//       itemCount = itemCount + 1;
//     }
//     itemWrapperEl.scrollLeft = item.width * itemCount;
//   }
//   leftBtnEl.addEventListener("click", (e) => {
//     console.log("clicked left button", e);
//     const wrapperEl = select(".item-wrapper");
//     wrapperEl.scrollLeft = -500;
//     moveSlides("left");
//   });
//   reightBtnEl.addEventListener("click", (e) => moveSlides("right"));
// })();

const wrapperEl = select(".item-wrapper");
wrapperEl.addEventListener("scroll", (e) =>
  console.log("scrolled", wrapperEl.scrollLeft)
);

const leftBtn = select("#left-btn");
leftBtn.addEventListener("click", (e) => {
  wrapperEl.scrollLeft -= 500;
});

const rightBtn = select("#right-btn");
rightBtn.addEventListener("click", (e) => {
  wrapperEl.scrollLeft += 500;
});
