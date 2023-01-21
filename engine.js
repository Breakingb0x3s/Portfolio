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
            sideDisplay.innerHTML = '<div id="pdescriptions"><div class="dasmotos"><p>This was one of my first projects, just a reminder of how far I have come since</p></div><div class="mathQuiz" hidden><p>Made a simple Math Quiz application to test kids and quickly give them a grade.  I am hoping to make it a bit more complex in the future.</p></div><div class="abc" hidden><p>This was completely made out of necessity for my kids, first time really learning how to manipulate the DOM.</p></div></div>';
            break;
        case 'art':
            break;
        case 'updates':
            break;
        case 'aboutMe':
            break;
        default:
            alert('It might be working ' + event.srcElement.id);
    }
    console.log('mainCard');
}

projects.addEventListener('click', changeDisplays);