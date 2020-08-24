exports.addComma = (num) => {
  const str = num.toString();
  let newStr = '';
  let count = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (count > 0 && count % 3 === 0) {
      newStr = `,${newStr}`;
    }
    newStr = str[i] + newStr;
    count += 1;
  }

  return newStr;
};
