const txtAnim = document.querySelector('txtAnim');

new Typewriter(txtAnim, {

})
.typestring('Welcome !')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong>')
.start()