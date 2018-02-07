function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
    let ranked_list = document.querySelectorAll('.ranked-list');

    for (var i = 0; i < ranked_list.length; i+=1) {
    ranked_list[i].innerHTML = parseInt(ranked_list[i].innerHTML) + n; 
    }
  
}


function deepestChild() {
    let divs = document.getElementById("grand-node").querySelectorAll("div");
    let tree;
    for (let i = 0; i < divs.length-1; i +=1 ) {
      tree = divs[i].querySelector(":last-child");
    }
    return tree;
}