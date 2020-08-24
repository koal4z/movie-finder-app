exports.changeTime = (num) => {
  const h = Math.floor(num / 60);
  const m = Math.abs(h * 60 - num);
  return { h, m };
};
