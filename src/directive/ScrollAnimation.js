//#1 if element show on screen observe will work
const animatedScrollObsever = new IntersectionObserver((entries, option) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("a-enter"); // 3- isIntersecting element(el) add class
      option.unobserve(entry.target); // 4- unobserver element
      //console.log(option === animatedScrollObsever);  // true
    }
  });
});
export const scrollAnimation = {
  beforeMount(el) {
    el.classList.add("a-before-enter"); // 1-beformount element(el) add class
    animatedScrollObsever.observe(el); // 2-element(el) observe animatedScrollObsever
  },
};

//#2 if element center of browser screen observer will work(do active that we gave)
const animatedScrollObseverViewfull = new IntersectionObserver(
  (entries, option) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("a-viewfull-enter"); // 3- isIntersecting element(el) add class
        option.unobserve(entry.target); // 4- unobserver element
        //console.log(option === animatedScrollObseverViewfull); // true
      }
    });
  },
  {
    threshold: 1, //threshold to 1 which means 100% of the viewfull element
  }
);
export const scrollAnimationViewfull = {
  beforeMount(el) {
    el.classList.add("a-viewfull-before-enter"); // 1-beformount element(el) add class
    animatedScrollObseverViewfull.observe(el); // 2-element(el) observe animatedScrollObseverViewfull
  },
};
