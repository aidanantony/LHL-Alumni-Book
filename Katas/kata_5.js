const urlEncode = function(text) {
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === ' ') {
      text = text.trim().split(' ').join('%20');
    }
  }
  return text;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));