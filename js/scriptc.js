/*
This Codepen is in the Public Domain.
You can use it for whatever purpose you like, except evil.
All code comes "as is" and is/was only guaranteed to work on my personal machine at the time I hit the save button (and even then).
Inspired by the work of Armand Chakhalyan https://dribbble.com/shots/14873383-Interactive-Slider-3d-Animation
*/

// Let's set some variables
// We'll capture the slider, the slides and the total amount of slides here
let i = 0,
    activeSlide = 1,
    slider = document.querySelector('slider'),
    allSlides = document.querySelectorAll('slide'),
    totalSlides = allSlides.length;

// Add click handler to the slider
slider.addEventListener("click", function(e) {
  updateSlider();
});

// Update slider
function updateSlider() {
  
  // Set the current slide to animate out
  allSlides[activeSlide - 1].classList.add('out');
  
  // If we haven't reached the last slide go to the next
  // Else go back to 1
  activeSlide < totalSlides ? activeSlide++ : activeSlide = 1;
  
  // Reset all slides
  for(i = 0; i < totalSlides; i++ ){
    allSlides[i].classList.remove('active');
  }
  
  // Add active to the current slide
  allSlides[activeSlide - 1].classList.add('active');
  
  // Remove the out class when the out animation is done
  setTimeout(function(){
    for(i = 0; i < totalSlides; i++ ){
      allSlides[i].classList.remove('out');
    }
  },1500);
  
};

// Initialise slider
function initSlider() {
  
  // Add active to the first slide
  allSlides[0].classList.add('active');
  
}

initSlider();