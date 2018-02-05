function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    document.getElementById("nested").querySelector("div.target");
}