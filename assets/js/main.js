// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      
//validation
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//menu du mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    //Quand on va cliquer sur un nav_link, ça va remove la classe du show-menu pour afficher la page
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    //   contactName = document.getElementById('contact-name'),
    //   contactEmail = document.getElementById('contact-email'),
    //   contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) =>{

        e.preventDefault()

        //serviceid, templateid, #form, publicKey
        emailjs.sendForm('service_u7codve', 'template_k4u6mti', '#contact-form', 'FlokJRjsDbadOPmDy')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully✅'

            // supprimer message apres 5 sec
            setTimeout(() =>{
                contactMessage.textContent =''
            }, 5000)

            contactForm.reset()

        }, ()=>{
            contactMessage.textContent=' Message not sent (service error) ❌'
        })
      }

      contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is greater than 350 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(darkTheme) 
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    //reset:true
})

sr.reveal(`.home__profil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`,  {origin: 'left', interval:100})
sr.reveal(`.services__card, .projects__card, .skills__container`,  {interval: 150})