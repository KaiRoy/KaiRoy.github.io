/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Kai Roy
 * Email: royka@oregonstate.edu
 *
 * Tasks:
 *  New Twit Insertion
 *      Red "create twit" Button will open modal
 *      Modal formating
 *      Modal will take input and create a twit
 *  Twit Searching
 *      Re-searching
 *      live search
*/


//New twit insertion
//Modal Button Variables
var createTwitButton = document.getElementById('create-twit-button') //Open Modal
var cancelModalButton = document.getElementsByClassName('modal-cancel-button') //Close Modal
var closeModalButton = document.getElementsByClassName('modal-close-button') //Close Modal
var acceptModalButton = document.getElementsByClassName('modal-accept-button') //Accept Modal

//Modal Input Variables
var twitTextInput = document.getElementById('twit-text-input')
var twitAuthorINput = document.getElementById('twit-attribution-input')

//Twit Container Variable
var twitContainer = document.getElementsByClassName('twit-container')

//Open Modal
function openModal() {
    //Modal View Variables
    var modalBackdrop = document.getElementById('modal-backdrop')
    var createTwitModal = document.getElementById('create-twit-modal')

    //Reveal Modal
    modalBackdrop.classList.remove('hidden')
    createTwitModal.classList.remove('hidden')
    console.log("== Modal was opened")
}
createTwitButton.addEventListener('click', openModal)

//Close Modal
function closeModal() {
    //Modal View Variables
    var modalBackdrop = document.getElementById('modal-backdrop')
    var createTwitModal = document.getElementById('create-twit-modal')

    //Hide Modal
    modalBackdrop.classList.add('hidden')
    createTwitModal.classList.add('hidden')
    console.log("== Modal was closed")
}
cancelModalButton[0].addEventListener('click', closeModal)
closeModalButton[0].addEventListener('click', closeModal)

//Create Twit
function createTwit(text, author) {
    //Twit
    var twitArticle = document.createElement('article')
    twitArticle.classList.add('twit')

    //Twit Icon
    var twitIcon = document.createElement('div')
    twitIcon.classList.add('twit-icon')
    //var twitIconI = document.createElement('i')
    twitIcon.innerHTML = "<i class=\"fas fa-bullhorn\"></i>"
    //twitIcon.appendChild(twitIconI)
    twitArticle.appendChild(twitIcon)

    //Twit Content
    var twitContent = document.createElement('div')
    twitContent.classList.add('twit-content')
    var twitText = document.createElement('p')
    var twitAuthor = document.createElement('p')
    twitText.classList.add('twit-text')
    twitAuthor.classList.add('twit-author') //Need to add the URL somehow
    twitText.textContent = text
    twitAuthor.textContent = author //Need to add the URL somehow
    twitContent.appendChild(twitText)
    twitContent.appendChild(twitAuthor)
    twitArticle.appendChild(twitContent)

    twitContainer[0].appendChild(twitArticle)
    console.log("== Twit was created")
}

//Accept Modal
function acceptModal() {
    //Modal Input Variables
    var twitTextInput = document.getElementById('twit-text-input').value
    var twitAuthorInput = document.getElementById('twit-attribution-input').value

    //Content Check
    if (twitTextInput.length == 0 || twitAuthorInput.length == 0){
        alert("Please fill in the missing information!")
        return
    }

    //Create Twit
    createTwit(twitTextInput, twitAuthorInput)

    //Hide Modal
    closeModal()
    
    document.getElementById('twit-text-input').value = ""
    document.getElementById('twit-attribution-input').value = ""

}
acceptModalButton[0].addEventListener('click', acceptModal)


//Twit Searching
var allTwits = []
function twitSearching() {
    var input = document.getElementById('navbar-search-input').value
    var twits = document.getElementsByClassName('twit')
    var twitText, twitAuthor, txtValue
    for (var i = 0; i < twits.length; i++) {
        twitText = twits[i].getElementsByTagName('p')[0]
        twitAuthor = twits[i].getElementsByTagName('a')[0]
        txtValue = twitText.textContent + " " + twitAuthor.textContent
        if (input.length == 0) {
            console.log("Input is empty")
            for (var j = 0; j < allTwits.length; j++) {
                twitContainer[0].appendChild(allTwits[j])
            }
            allTwits = []
        } else if (txtValue.toUpperCase().indexOf(input.toUpperCase()) <= -1) {
            allTwits.push(twits[i])
            twits[i].remove()
        } else {
            
        }
    }
}