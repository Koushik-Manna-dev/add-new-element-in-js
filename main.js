let btn = document.getElementById("submit");

btn.onclick = function () {
    let newCon = document.getElementById("newCon").value;
    let contain = document.getElementById("contain");
    contain.innerHTML +='<div class="col"><div class="m-2 py-5 text-center bg-info rounded">' + newCon + '</div></div>';
}