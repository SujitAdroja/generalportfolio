import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/scroller.scss";

const horizontalLoop = (items, config) => {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  const toIndex = (index, vars) => {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  };

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
};

const Scrollers = ({
  skills,
  direction,
  gradientColors,
  gradientDirection,
}) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const line = tickerRef.current.querySelector(".stb_line_single");
    const links = line.querySelectorAll("a");
    const tl = horizontalLoop(links, {
      repeat: -1,
      speed: direction === "right" ? 1 : 1.5,
      reversed: direction === "left",
      paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px")),
    });

    const handleMouseEnter = () =>
      gsap.to(tl, { timeScale: 0, overwrite: true });
    const handleMouseLeave = () =>
      gsap.to(tl, {
        timeScale: direction === "left" ? -1 : 1,
        overwrite: true,
      });

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      tl.kill();
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [direction]);

  const gradientStyle = {
    background:
      gradientDirection !== "center"
        ? `linear-gradient(90deg, ${gradientColors[0]}  0%, ${gradientColors[1]} 60%)`
        : `linear-gradient(90deg, ${gradientColors[1]} 0%, ${gradientColors[0]} 50%,  ${gradientColors[1]} 100%)`,
    color:
      (gradientDirection === "center" && "#1b646b") ||
      (gradientDirection === "left" && "#532eb9") ||
      (gradientDirection === "right" && "#F45B73"),
  };

  return (
    <div
      className="services-ticker-block"
      ref={tickerRef}
      style={gradientStyle}
    >
      <div className="stb_line_single">
        {skills.map((skill, index) => (
          <a key={index} href="#" className="stb-item">
            <span>{skill}&nbsp; &nbsp;</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Scrollers;
