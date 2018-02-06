function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
    let ranked_list = document.querySelectorAll('.ranked-list');

    for (var i = 0; i < ranked_list.length; i++) {
    ranked_list[i].innerHTML = parseInt(ranked_list[i].innerHTML) + n; 
    }
  
}


function deepestChild() {
  
}