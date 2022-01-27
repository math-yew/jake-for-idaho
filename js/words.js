// var words = JSON.parse(words);
// var words = words;

let changes = document.querySelectorAll('[change]');
let originalWords = {};
for(var i=0; i<changes.length; i++){
  let c = changes[i];
  let val = c.innerHTML;
  // console.log("c: " + c.innerHTML);
  let attribute = c.getAttribute('change')
  // console.log("a: " + attribute);
  originalWords[attribute] = val;
}

// console.log("words = " + JSON.stringify(originalWords));
console.log("words");
for(w in words){
  let element = document.querySelectorAll('[change="' + w + '"]');
  if(!!element[0]){
    element[0].innerHTML = words[w];
    console.log("= " + element[0].innerHTML);
  }
}
