export function disableScrolling() {
  // To get the scroll position of current webpage
  const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  //#1 if scroll happens, set it to the previous value
  window.onscroll = () => {
    window.scrollTo(LeftScroll, TopScroll);
  };
  //#2 hidden header
  document.getElementById("main-screen").classList.add("scrollbar-hidden");
}
export function enableScrolling() {
  //#1
  window.onscroll = () => {};
  //#2
  document.getElementById("main-screen").classList.remove("scrollbar-hidden");
}
