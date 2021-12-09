/**search function */

function search() {
    let items = document.getElementsByClassName("nameOfItem");
    let containers = document.getElementsByClassName("itemContainer");
    let query = document.getElementById("search").value;
    if (query == "") {
        for (var i = 0; i < items.length; i++)
            containers[i].setAttribute("style", "display : visible");
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].innerHTML.toLowerCase().includes(query.toLowerCase())) {
                containers[i].setAttribute("style", "display : visible");
            } else {
                containers[i].setAttribute("style", "display : none");
                console.log(i,"might be invisible")
            }
        }
    }
}