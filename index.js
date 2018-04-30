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
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedList[0];
  const secondList = rankedList[1];
  let children = firstList.children
  let start = 
  
}
  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
      }
    })
  })
})