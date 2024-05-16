// swiper slider
var swiper = new Swiper(".class-slider", {
  slidesPerView: 1,
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

// gsap animation

//slide 1
// gsap.from(".title", { opacity: 0, y: -50, duration: 1 })
// gsap.from(".title2", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
// gsap.from(".description", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
// gsap.to(".button1", { opacity: 1, rotateY: 360, duration: 1 }, "-=0.5")

// var tl2 = gsap.timeline({ repeat: -1, yoyo: true })

// // Tween animation for image
// tl2.to(".image-top", { x: "+=50", duration: 2, ease: "power1.inOut" })
// tl2.to(".image-bottom", { y: "-=50", duration: 2, ease: "power1.inOut" }, 0)
// tl2.to(
//   ".color-bars",
//   { scale: "+=0.30", filter: "blur(5px)", duration: 2, ease: "power1.inOut" },
//   0
// )

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the element is in the viewport, start the animation
      gsap.from(".title", { opacity: 0, y: -50, duration: 1 })
      gsap.from(".title2", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
      gsap.from(".description", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
      gsap.to(".button1", { opacity: 1, rotateY: 360, duration: 1 }, "-=0.5")

      var tl2 = gsap.timeline({ repeat: -1, yoyo: true })

      // Tween animation for image
      tl2.to(".image-top", { x: "+=50", duration: 2, ease: "power1.inOut" })
      tl2.to(
        ".image-bottom",
        { y: "+=30", duration: 2, ease: "power1.inOut" },
        0
      )
      tl2.to(
        ".color-bars",
        {
          scale: "+=0.30",
          filter: "blur(5px)",
          duration: 2,
          ease: "power1.inOut",
        },
        0
      )
    }
  })
})
const element = document.querySelector(".first-slide-container .wrapper")
observer.observe(element)

//Observer for slide 2
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.from(".title-second", { opacity: 0, y: -50, duration: 1 })
      gsap.from(
        ".description-second",
        { opacity: 0, y: 50, duration: 1 },
        "-=0.5"
      )
      gsap.to(
        ".button-second",
        { opacity: 1, rotateY: 720, duration: 0.5 },
        "-=0.5"
      )

      // Motion Path animation

      var tl3 = gsap.timeline({ repeat: -1, yoyo: true })

      tl3.to(
        ".rocket-doodle",
        {
          motionPath:
            "m 166 189 C 228 -55 522 -76 631 176 C 671 421 1066 430 1119 165 C 1017 -74 718 -50 631 174 C 560 421 264 432 164 191",
          duration: 10,
          ease: "power2.inOut",
          repeat: -1,
        },
        0
      )
      tl3.to(
        ".rocket-doodle",
        {
          rotation: 360,
          duration: 1,
          repeat: -1,
          ease: "power2.inOut",
        },
        0
      )

      //Pendulum Motion

      gsap.to(
        ".arts-doodle",
        {
          motionPath: {
            path: "M 239 0 A 3.42 1.22 0 0 1 94 1",
            autoRotate: true,
          },
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        },
        0
      )

      gsap.to(".creativity-doodle", {
        rotation: 0,
        motionPath: { path: "M -77 0 A 3.42 1.22 180 0 1 66 0" },
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    }
  })
})
const element2 = document.querySelector(".second-slide-container .wrapper")
observer2.observe(element2)

//observer for slide 3
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.from(".title-third1", { opacity: 0, y: -50, duration: 1 })
      gsap.from(".title-third2", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
      gsap.from(
        ".description-second",
        { opacity: 0, y: 50, duration: 1 },
        "-=0.5"
      )
      gsap.to(
        ".button-second",
        { opacity: 1, rotateY: 360, duration: 1 },
        "-=0.5"
      )
      const ulElements = document.querySelectorAll(".list")

      // Loop through each ul element and stagger the animation of its children
      ulElements.forEach((ulElement) => {
        gsap.from(
          ulElement.children,
          {
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2, // Adjust the stagger value as needed
          },
          "-=0.5"
        )
      })
      gsap.to(
        ".button-third",
        { opacity: 1, rotateY: 360, duration: 0.5 },
        "-=0.5"
      )
      gsap.to(
        ".yellow-blob",
        {
          x: "+=50",
          duration: 4,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      )

      gsap.to(
        ".red-blob",
        {
          y: "-=30",
          duration: 4,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      )

      gsap.to(
        ".blue-blob",
        {
          scale: "+=0.2",
          rotation: 0,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      )
    }
  })
})
const element3 = document.querySelector(".third-slide")
observer3.observe(element3)

//slide 2
// gsap.from(".title-second", { opacity: 0, y: -50, duration: 1 })
// gsap.from(".description-second", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
// gsap.to(".button-second", { opacity: 1, rotateY: 360, duration: 1 }, "-=0.5")

// // Motion Path animation

// var tl3 = gsap.timeline({ repeat: -1, yoyo: true })

// tl3.to(
//   ".rocket-doodle",
//   {
//     motionPath:
//       "m 166 189 C 228 -55 522 -76 631 176 C 671 421 1066 430 1119 165 C 1017 -74 718 -50 631 174 C 560 421 264 432 164 191",
//     duration: 10,
//     ease: "power2.inOut",
//     repeat: -1,
//   },
//   0
// )
// tl3.to(
//   ".rocket-doodle",
//   {
//     rotation: 360,
//     duration: 1,
//     repeat: -1,
//     ease: "power2.inOut",
//   },
//   0
// )

// //Pendulum Motion

// gsap.to(
//   ".arts-doodle",
//   {
//     motionPath: { path: "M 239 0 A 3.42 1.22 0 0 1 94 1", autoRotate: true },
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "power2.inOut",
//   },
//   0
// )

// gsap.to(".creativity-doodle", {
//   rotation: 0,
//   motionPath: { path: "M -77 0 A 3.42 1.22 180 0 1 66 0" },
//   duration: 2,
//   ease: "power1.inOut",
//   yoyo: true,
//   repeat: -1,
// })

// gsap.from(".title-third1", { opacity: 0, y: -50, duration: 1 })
// gsap.from(".title-third2", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
// gsap.from(".description-second", { opacity: 0, y: 50, duration: 1 }, "-=0.5")
// gsap.to(".button-second", { opacity: 1, rotateY: 360, duration: 1 }, "-=0.5")
// const ulElements = document.querySelectorAll(".list")

// // Loop through each ul element and stagger the animation of its children
// ulElements.forEach((ulElement) => {
//   gsap.from(
//     ulElement.children,
//     {
//       duration: 1,
//       y: 100,
//       opacity: 0,
//       stagger: 0.2, // Adjust the stagger value as needed
//     },
//     "-=0.5"
//   )
// })
// gsap.to(".button-third", { opacity: 1, rotateY: 360, duration: 0.5 }, "-=0.5")
// gsap.to(
//   ".yellow-blob",
//   { x: "+=50", duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 },
//   0
// )

// gsap.to(
//   ".red-blob",
//   { y: "-=30", duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 },
//   0
// )

// gsap.to(
//   ".blue-blob",
//   {
//     scale: "+=0.2",
//     rotation: 0,
//     duration: 2,
//     ease: "power1.inOut",
//     yoyo: true,
//     repeat: -1,
//   },
//   0
// )
