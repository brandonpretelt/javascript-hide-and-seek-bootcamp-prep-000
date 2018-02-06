function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
    let ranked_list = document.querySelectorAll('.ranked-list');
    
    let children = ranked_list.children;

    for (var i = 0; i < children.length; i++) {
        parseInt(children[i].innerHTML = i + n); 
    }
  
}


function deepestChild() {
  
}