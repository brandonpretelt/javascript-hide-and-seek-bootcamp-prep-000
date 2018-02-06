function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  let ranked_list = document.getElementById("app").querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked_list.length; i++) {
    ranked_list[i].textContent = parseInt(i) + n;
  }
}


function deepestChild() {
  
}