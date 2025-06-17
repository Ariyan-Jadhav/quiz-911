document.addEventListener("DOMContentLoaded", function () {
  const flightpath = {
    curviness: 2,
    autoRotate: true,
    values: [
      { x: 100, y: 0 },
      { x: 300, y: 0 },
      { x: 500, y: 0 },
      { x: 600, y: 0 },
      { x: 750, y: 0 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: -50 },
    ],
  };
  const slide1 = document.getElementById("slide-1");
  const slide2 = document.getElementById("slide-2");

  const tl = new TimelineMax();
  tl.fromTo(
    slide2,
    1.2,
    { height: "0vh" },
    { height: "70vh", ease: Power2.easeInOut }
  )
    .fromTo(
      slide2,
      1.2,
      { width: "100%" },
      { width: "65%", ease: Power2.easeInOut }
    )

    .fromTo(
      slide1,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: Power2.easeInOut },
      "-=0.8"
    );
  const tween = new TimelineLite();

  tween.add(
    TweenLite.to(".plane", 5, {
      bezier: flightpath,
      ease: Power2.easeInOut,
    })
  );
});
