// BACK-TO-TOP BUTTON
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 120) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// THEME
let theme = localStorage.getItem('theme')
if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')
for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'Styles/light.css'
	}
	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'Styles/dark.css'
	}
	if(mode == 'pink'){
		document.getElementById('theme-style').href = 'Styles/pink.css'
	}
  if(mode == 'lemon'){
		document.getElementById('theme-style').href = 'Styles/lemon.css'
	}
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'Styles/blue.css'
	}
	localStorage.setItem('theme', mode)
}
