const mainDisplay = document.getElementById('info');
const sideDisplay = document.getElementById('display');
const art = document.getElementById('art');
const projects = document.getElementById('projects');
const updates = document.getElementById('updates');
const aboutMe = document.getElementById('aboutMe');
const gallery = document.getElementById('gallery');
const cards = document.getElementsByClassName('card');
//Main components of the portfolio are listed above
let cardData;
let displayData;
//Testing, I will attempt to have the project contents switch to the main and side displays when clicked, but then need the aboutMe info to be stored in the clicked on card.  Need to take into account if the next card clicked, the aboutMe info doesn't accidently erase previous card data.
let changeDisplays = (event) =>{

//event.srcElement kinda works like 'this' in function for vanilla JS
console.log(mainDisplay.children[0].id);
    switch(event.srcElement.id){
        case 'projects':
            switch(mainDisplay.children[0].id){
                case 'aboutMe':
                    document.getElementById('bio').hidden = true;
                    displayData = aboutMe.cloneNode(true);
                    displayData.className = "card";
                    break;
                case 'projects':
                    document.getElementById('links').hidden = true;
                    displayData = projects.cloneNode(true);
                    displayData.className = "card";
                    break;
                case 'art':
                    document.getElementById('artGallery').hidden = true;
                    displayData = art.cloneNode(true);
                    displayData.className = "card";
                    break;
                case 'updates':
                    document.getElementById('dates').hidden = true;
                    displayData = updates.cloneNode(true);
                    displayData.className = "card"
                    break;
                default:
                    alert('Dunno how but you broke it')
            }
            document.getElementById('links').hidden = false;
            mainDisplay.innerHTML = '<div class="mainCard" id="projects">' + projects.innerHTML + '</div>';
            gallery.appendChild(displayData);
            projects.remove();
            break;
        default:
            alert('It might be working ' + event.srcElement.id);
    }
    console.log('mainCard');
}

projects.addEventListener('click', changeDisplays);