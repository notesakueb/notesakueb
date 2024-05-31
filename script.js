let menu = document.getElementById(`menu`);
let display = 0;

function showhide() {
    if (display == 1){
        menu.style.display = `flex`;
        display = 0
    }
    else {
        menu.style.display = `none`;
        display = 1;
    }
}