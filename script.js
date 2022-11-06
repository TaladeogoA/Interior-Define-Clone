const tl = gsap.timeline({ repeat: -1 });

tl.to(".hero-bg img:nth-child(1)", {
  opacity: 0,
  duration: 2,
  ease: "none",
});

tl.to(
  ".hero-bg img:nth-child(2)",
  {
    opacity: 0,
    duration: 2,
    ease: "none",
    scale: 1.2,
    y: 10,
    x: 10,
  },
  "+=2"
);

tl.to(
  ".hero-bg img:nth-child(3)",
  {
    opacity: 0,
    duration: 2,
    ease: "none",
    x: 100,
  },
  "+=2"
);

tl.to(
  ".hero-bg img:nth-child(4)",
  {
    opacity: 0,
    duration: 2,
    ease: "none",
    x: -100,
  },
  "+=2"
);

tl.to(
  ".hero-bg img:nth-child(5)",
  {
    opacity: 0,
    duration: 2,
    ease: "none",
    y: 100,
  },
  "+=2"
);

tl.to(
  ".hero-bg img:nth-child(1)",
  {
    opacity: 1,
    duration: 2,
    ease: "none",
  },
  "-=2"
);

document.addEventListener("DOMContentLoaded", function () {
  tl.play();
});

// Elements section

const elementIcons = document.querySelectorAll(".element-icon");
const imagesContainer = document.querySelector(".element-wrapper");
const fullImageContainer = document.querySelector(".element-full-image");

// const t = gsap.timeline({ paused: true });

// t.to(fullImageContainer, {
//   scale: 1.2,
//   duration: 5,
//   ease: "power2.inOut",
// });

elementIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    imagesContainer.style.display = "none";

    fullImageContainer.style.backgroundImage = `url(/images/element-${icon.dataset.image}.jpg)`;

    //   zoom in animation on background image
    gsap.to(fullImageContainer, {
      scale: 1.2,
      duration: 5,
      ease: "power2.inOut",
    });

    fullImageContainer.style.display = "block";
  });

  icon.addEventListener("mouseleave", () => {
    imagesContainer.style.display = "flex";
    fullImageContainer.style.display = "none";

    //   zoom out animation on background image
    gsap.to(fullImageContainer, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  });
});

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
