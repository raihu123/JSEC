const printNumbers = (from, to) => {
  const interval = setInterval(() => {
    if (from <= to) {
      console.log(from);
      from++;
    } else {
      clearInterval(interval);
    }
  }, 1000)
}

printNumbers(9,20);
