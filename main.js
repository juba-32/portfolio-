const navtoggler =document.querySelector(".nav-toggler")
navtoggler.addEventListener("click" ,(s)=>{
	sectionhiden()
	navtoggle()
})
function sectionhiden() {
	document.querySelector("section.active").classList.toggle("fade-out")
}
function navtoggle(){
	document.querySelector(".header").classList.toggle("active")
}
document.addEventListener("click",(s)=>{
	if (s.target.classList.contains("link-item") && s.target!==""){
		if (s.target.classList.contains("nav-item")){
			navtoggle()
		}
		setTimeout(()=>{
			document.querySelector("section.active").classList.remove("active","fade-out")
		   document.querySelector(s.target.hash).classList.add("active")	

		},500)
	}
})
/*------------------about tabs----------------*/

const abouttabs =document.querySelector(".about-tabs"),
aboutsection =document.querySelector(".about-section");

abouttabs.addEventListener("click" ,(s)=>{
   if (s.target.classList.contains("tab-item") && !s.target.classList.contains("active")) {
   	    abouttabs.querySelector(".active").classList.remove("active");
   	    s.target.classList.add("active");
        const target = s.target.getAttribute("data-target");
        aboutsection.querySelector(".tab-content.active").classList.remove("active")
        aboutsection.querySelector(target).classList.add("active")
   }
  
   })















/*--------------------portfolio item details popup-------------------*/
document.addEventListener("click" , (s)=>{
	if (s.target.classList.contains("view-project-btn")) {
		toggleportfolio()
		toggleportfoliodetails(s.target.parentElement)
	}
})
function toggleportfolio() {
	document.querySelector(".portfolio-popup").classList.toggle("open")
	document.body.classList.toggle("hidden-scrolling")
	document.querySelector(".main").classList.toggle("feed-out")
}
/*--------------------hide popup on click outside of it----*/

/*-----------------------close portfolio--------------------*/
document.querySelector(".pp-close").addEventListener("click" , toggleportfolio )



document.addEventListener("click", (s)=>{
	if(s.target.classList.contains("pp-inner")){
		toggleportfolio()
	}
})
function toggleportfoliodetails(s){
	document.querySelector(".pp-thumbnail img").src = 
	s.querySelector(".portfolio-item-thumbnail img").src

	document.querySelector(".pp-header h3").innerHTML = 
	s.querySelector(".portfolio-item-title").innerHTML

	document.querySelector(".pp-body").innerHTML = 
	s.querySelector(".portfolio-item-details").innerHTML
}

