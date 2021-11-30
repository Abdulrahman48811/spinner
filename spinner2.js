const arr = ['\r|','\r/','\r-','\r\\','\r\|','\r|','\r/','\r-','\r\\','\r\|']
let index = 0;
for (const char of arr) {
  index += 200;
  setTimeout(() => {
    process.stdout.write(`\r ${char}`)
  }, index);
} 
