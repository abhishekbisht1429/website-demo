console.log("running");
/* sections */
sectAboutMe = document.querySelector("section.about_me");
sectProjects = document.querySelector("section.projects");
sectPublications = document.querySelector("section.publications");
activeSect = sectAboutMe;

/* tabs */
tabAboutMe = document.querySelector("#nav_list a.about_me");
console.log(tabAboutMe);
tabProjects = document.querySelector("#nav_list a.projects");
tabPublications = document.querySelector("#nav_list a.publications");
tabContact = document.querySelector("#nav_list a.contact");
activeTab = tabAboutMe;

activeSect.classList.remove("hidden");
activeTab.classList.add("active");

onclickTab = function() {
    console.log("onclick");
    activeSect.classList.add("hidden");
    activeTab.classList.remove("active");
    console.log(this.id);
    activeTab = this;
    if(this.id == tabAboutMe.id) {
        activeSect = sectAboutMe;
    } else if(this.id == tabProjects.id) {
        activeSect = sectProjects;
    } else if(this.id == tabPublications.id) {
        activeSect = sectPublications;
    }
    activeSect.classList.remove("hidden");
    activeTab.classList.add("active");
}

tabAboutMe.onclick = onclickTab;
tabProjects.onclick = onclickTab;
tabPublications.onclick = onclickTab;
tabContact.onclick = onclickTab;

paraTime = document.querySelector("p#time");
function time() {
    paraTime.innerHTML = Date();
}

setInterval(time, 1000);