//Test 1 -- Passed
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

//Test 2 -- Passed 
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

//Test 3 -- Passed
function deepestChild() {
  var store = document.getElementById("grand-node").querySelectorAll("div");
  var deepest;
  for(let i=0; i<store.length - 1; i++) {
    deepest = store[i].querySelector("div");
  }return deepest;
}

//Test 4 --
function increaseRankBy(n) {
  let list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(var i=0;i<list.length - 1;i++) {
    
  }
  
}
