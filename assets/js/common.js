jQuery(function ($) {
  $(function () {
    var scroll_func = function () {
      $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, "slow", "swing");
      return false;
    };
    $(function () {
      $(".anchor").click(scroll_func);
    });
  });
});

new Splide("#image-carousel", {
  type: "loop",
  perPage: 1,
  paginate: false,
  type: "fade",
  rewind: true,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  speed: 4000,
  easing: "ease",
  pauseOnHover: false,
}).mount();

// const logoBox = document.querySelector(".logo-box");

//Observer

// window.addEventListener("resize", (event) => {
//   Resizing();
// });

// function Resizing() {
//   const pageWidth = document.documentElement.scrollWidth;
//   if (pageWidth > 768) {

//   }
// }
const logoBox = document.querySelector(".logo-box");
const header = document.querySelector("header");
const topBtnGp = document.querySelector(".totop-btn-gp");
const scrollBtn = document.querySelector(".scrolldown4");

// let options = {
//   root: null,
//   threshold: 0.0001,
// };

// let observer = new IntersectionObserver(callback, options);
// const wrapper = document.querySelector(".wrapper");

// observer.observe(messageSec);

// function callback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("It is intersection");
//       logoBox.classList.remove("big");
//       header.classList.add("bg-w");
//       // triangle.classList.add("d-none");
//       topBtnGp.classList.add("pos-absolute");
//       // scrollBtn.classList.remove("pos-absolute");
//     }
//     if (!entry.isIntersecting) {
//       console.log("It is not intersection");
//       logoBox.classList.add("big");
//       header.classList.remove("bg-w");
//       topBtnGp.classList.remove("pos-absolute");
//       // scrollBtn.classList.add("pos-absolute");

//       // topBtn.classList.add("pos-absolute");
//       // topBtn.classList.remove("pos-fixed");
//       // triangle.classList.remove("d-none");
//       // topBtn.classList.remove("d-block");
//     }
//   });
// }

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY; // Get the current scroll position

  if (scrollPosition > 500) {
    logoBox.classList.remove("big");
    header.classList.add("bg-w");
    topBtnGp.classList.add("pos-absolute");
  } else {
    logoBox.classList.add("big");
    header.classList.remove("bg-w");
    topBtnGp.classList.remove("pos-absolute");
  }
});

//Scroll Top Button
const toTopBtn = document.querySelector(".totop-btn");
toTopBtn.addEventListener("click", () => window.scrollTo(0, 0));

// const menuList = [...document.querySelectorAll(".right ul")];
// console.log(menuList);
// const isShowPC = menuList.contains("show-pc");
// if (isShowPC) {
//   console.log("ok");
// }
