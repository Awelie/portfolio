const txtAnim = document.querySelector('.txtAnim');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 50
})
.changeDelay(100)
.typeString('<strong>Welcome !</strong>')
.pauseFor(600)
.deleteChars(9)
.typeString('<strong>Bienvenue !</strong>')
.pauseFor(600)
.deleteChars(11)
.typeString('<strong>Willkommen !</strong>')
.pauseFor(600)
.deleteChars(12)
.start()