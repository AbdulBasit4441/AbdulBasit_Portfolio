document.addEventListener("DOMContentLoaded", () => {
  // ====== Click Game Logic ======
  let score = 0;
  let timeLeft = 20;
  let gameActive = false;
  let timerInterval;

  const gameButton = document.getElementById('gameButton');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('startButton');

  if (gameButton && scoreDisplay && timerDisplay && startButton) {
    gameButton.addEventListener('click', () => {
      if (gameActive) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
      }
    });

    startButton.addEventListener('click', () => {
      if (gameActive) return;

      score = 0;
      timeLeft = 10;
      gameActive = true;

      scoreDisplay.textContent = `Score: ${score}`;
      timerDisplay.textContent = `Time Left: ${timeLeft}s`;

      timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          gameActive = false;
          alert(`Time's up! Your final score is ${score}`);
        }
      }, 1000);
    });
  }

  // ====== Mouse Follower Cursor Logic ======
function cursor_effect(){
    
}
  const outer = document.querySelector('.outer');
  const inner = document.querySelector('.inner');

  if (!outer || !inner) {
    console.warn("Mouse follower elements not found.");
    return;
  }

  let timeout;
  let lastX = 0;
  let lastY = 0;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Move outer to mouse
    gsap.to(outer, {
      x: x,
      y: y,
      duration: 0.6,
      ease: "power2.out"
    });

    // Move inner with trail
    const offsetX = (x - lastX) * 3;
    const offsetY = (y - lastY) * 3;

    gsap.to(inner, {
      x: offsetX,
      y: offsetY,
      duration: 0.7,
      ease: "power2.out"
    });

    lastX = x;
    lastY = y;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }, 150);
  });
});

var tl = gsap.timeline();

function project(){

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Optional: GSAP animation when menu opens
    if (navLinks.classList.contains("show")) {
      gsap.fromTo(".nav-links li", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      );
    }
  });
});

  /*Project page animation */
document.querySelector(".type-title").textContent = "";

// Typing animation
tl.to(".type-title", {
  scrollTrigger: {
    trigger: ".type-title",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
       // Set true to debug
  },
  repeat: -1,     
  yoyo: true,     
  repeatDelay: 1,
  duration: 2,
  text: "My Projects",
  ease: "power1.inOut"
},"ab");

// Force ScrollTrigger to re-calculate on load
ScrollTrigger.refresh();
tl.from(".slider-wrapper ",{
y:100,
duration:0.6,
opacity:0,
},"ab")
tl.from(".controls",{
opacity:0,
duration:0.6,
},"ab")
/*Project page end*/
}

function animation(){
tl.from(".navbar ",{
y:-100,
duration:0.4,
opacity:0,

})
tl.from(".nav-links li ",{
y:-100,
duration:0.4,
opacity:0,
stagger: 0.2
})
/*About page*/

tl.from(".about_left ",{
x:-100,
opacity:0,
duration:0.6,
},"sath")
tl.from(".about_right ",{
x:100,
opacity:0,
duration:0.5,
},"sath")
/*About page animation*/
tl.from(".left ",{
x:-100,
opacity:0,
duration:0.6,
stagger:0.3
})
tl.from(".cta-buttons",{
opacity:0,
duration:0.6,
})
tl.from(".logos",{
opacity:0,
duration:0.6,
})
tl.from(".right",{
opacity:0,
duration:0.6,
},"-=1")

/*section3 */

ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 769px)": function () {
    gsap.from(".left_section", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        scrub:2
      }
    });

    gsap.from(".right_section", {
      x: 100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        scrub:2
      }
    });
  },

  // Mobile
  "(max-width: 768px)": function () {
    gsap.from(".left_section", {
      x: 0,
      opacity: 0,
      y: 100,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".left_section",
        start: "top 90%",
        scrub:2
      }
    });

    gsap.from(".right_section", {
      x: 0,
      opacity: 0,
      y: 100,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".right_section",
        start: "top 90%",
        scrub:2
      }
    });
  }
});

/*Section 3 ended */
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    scroller: "body",
    start: "top 60%",
    end: "top 10%",
    scrub: 2 
  }
});
tl3.from(".section3 .section3_left",{
 x: -300,
  opacity: 0,
  duration: 0.6
},"RL")
tl3.from(".section3 .section3_right",{
 x: 300,
  opacity: 0,
  duration: 0.6
},"RL")

var tl4 = gsap.timeline({
  scrollTrigger: {
   trigger: ".section4",
    scroller: "body",
    start: "top 70%",
    end: "top 10%",
    scrub: 2,
  }
})
tl4.from(".section4",{
opacity:0,
duration:0.6,
})
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".certification ",
    scroller: "body",
    start: "top 60%",
    end: "top 10%",
    scrub: 2 
  }
});
tl5.from(".certification .box1",{
  opacity: 0,
  duration: 0.6
},"B")
tl5.from(".certification .box2",{
  opacity: 0,
  duration: 0.6
},"B")



}
setTimeout(() => {
      
  tl6 = gsap.timeline();
tl6.to(".loader ",{
          duration:0.7,
          y:-1000,
          display:"none"
          })

    }, 2000); // change to 10000 for 10 seconds


animation();
project();

