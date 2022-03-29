(() => {
  const konamiCode = ["ArrowUp"];

  let index = 0;
  const onKeyDown = (even) => {
    even.key === konamiCode[index] ? index++ : (index = 0);
    console.log(even.key);
    if (konamiCode.length === index) {
      startSnowing();
    }
  };

  const run = () => {
    document.addEventListener("keydown", onKeyDown);
  };
  run();
})();
