// active header sticky

const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY > 500)
})

// active scroll menu

const liLink = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLength = section.length;
    while(--secLength && window.scrollY + 500 < section[secLength].offsetTop){}
    liLink.forEach(sec => sec.classList.remove("active"));
    liLink[secLength].classList.add("active");
}



activeMenu();
window.addEventListener("scroll",activeMenu);



// active menu icon

const menuIcon = document.querySelector("#menu_icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
// remove icon

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


// scroll animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show_items");
        } else{
            entry.target.classList.remove("show_items")
        }
    });
});

const scrollLeft = document.querySelectorAll(".scroll_left");
scrollLeft.forEach((el)=>observer.observe(el));