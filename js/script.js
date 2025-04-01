// document.getElementById("search-button").addEventListener("click", function() {
//     alert("Search button clicked!");
// });
const btns = document.querySelectorAll('.button-header span');
console.log(btns);

btns.forEach((elem, i) =>{
    i++;
    elem.addEventListener('click', () => {
        alert(`przycisk nr ${i}`);
    });
});