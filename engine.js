const mainDisplay = document.getElementById('info');
const sideDisplay = document.getElementById('display');
const art = document.getElementById('art');
const projects = document.getElementById('projects');
const updates = document.getElementById('updates');
const gallery = document.getElementById('gallery');
const cards = document.getElementsByClassName('card');
const pictures = ['"/img/zune.jpg"', '"/img/gulllina.jpg"','"/img/foxtattoo.jpg"','"/img/panda.jpg"','"/img/timekiller.jpg"','"/img/joker.jpg"'];
//Main components of the portfolio are listed above
let cardData;
let displayData;

//Testing, I will attempt to have the project contents switch to the main and side displays when clicked, but then need the aboutMe info to be stored in the clicked on card.  Need to take into account if the next card clicked, the aboutMe info doesn't accidently erase previous card data.
let changeDisplays = (event) =>{

//event.srcElement kinda works like 'this' in function for vanilla JS

    switch(event.srcElement.id){
        case 'projects':
            switch(mainDisplay.children[0].id){
                case 'mainAboutMe':
                    document.getElementById('bio').hidden = true;
                    displayData = document.getElementById('mainAboutMe').cloneNode(true);
                    displayData.className = "card";
                    displayData.id = "aboutMe";
                    break;
                case 'mainProjects':
                    document.getElementById('links').hidden = true;
                    displayData = document.getElementById('mainProjects').cloneNode(true);
                    displayData.className = "card";
                    displayData.id = "projects";
                    break;
                case 'mainArt':
                    document.getElementById('artGallery').hidden = true;
                    displayData = document.getElementById('mainArt').cloneNode(true);
                    displayData.className = "card";
                    displayData.id = "art";
                    break;
                case 'mainUpdates':
                    document.getElementById('dates').hidden = true;
                    displayData = document.getElementById('mainUpdates').cloneNode(true);
                    displayData.className = "card"
                    displayData.id = "updates"
                    break;
                default:
                    alert('Dunno how but you broke it')
            }
            document.getElementById('links').hidden = false;
            mainDisplay.innerHTML = '<div class="mainCard" id="mainProjects">' + projects.innerHTML + '</div>';
            gallery.appendChild(displayData);
            document.getElementById('projects').remove();
            sideDisplay.innerHTML = '<div id="pdescriptions"><div class="dasmotos"><p>This was one of my first projects, just a reminder of how far I have come since</p></div><div class="mathQuiz"><p>Made a simple Math Quiz application to test kids and quickly give them a grade.  I am hoping to make it a bit more complex in the future.</p></div><div class="abc"><p>This was completely made out of necessity for my kids, first time really learning how to manipulate the DOM.</p></div></div>';
            document.getElementById(displayData.id).addEventListener('click', changeDisplays);
            break;
        case 'art':
            break;
        case 'updates':
            break;
        case 'aboutMe':
            switch(mainDisplay.children[0].id){

                case 'mainProjects':
                    document.getElementById('links').hidden = true;
                    displayData = document.getElementById('mainProjects').cloneNode(true);
                    displayData.className = "card";
                    displayData.id = "projects";
                    break;
                case 'mainArt':
                    document.getElementById('artGallery').hidden = true;
                    displayData = document.getElementById('mainArt').cloneNode(true);
                    displayData.className = "card";
                    displayData.id = "art";
                    break;
                case 'mainUpdates':
                    document.getElementById('dates').hidden = true;
                    displayData = document.getElementById('mainUpdates').cloneNode(true);
                    displayData.className = "card"
                    displayData.id = "updates"
                    break;
                default:
                    alert('Dunno how but you broke it')
            }
            document.getElementById('bio').hidden = false;
            mainDisplay.innerHTML = '<div id="mainAboutMe" class="mainCard">This section is about me.<p id="bio">Hello, my name is Riley Robinson.  I am a developer who is continuing my journey into programming.  One aspect that has lead me to this journey is boxing.  Growing up I always admired fighters and their ability to take in information and adjust to their opponent on the fly.You cannot be successful if you cannot learn. And one thing that my attempts at boxing have taught me, is that learning takes time.  Even the amazing on the fly adjustments, are learned weeks to months prior to the actual fight. Another aspect that plays into my coding is my love of games.  It is not just sports, but videogames as well that inspire me.  It has always been fun to breakdown the inner workings of a game, understanding the rules, making adjustments for a more interesting experience, all of this I can also get from coding.</p></div>'
            gallery.appendChild(displayData);
            document.getElementById('aboutMe').remove();
            sideDisplay.innerHTML = '<img src="/img/115906251.png">';
            document.getElementById(displayData.id).addEventListener('click', changeDisplays);
            break;
        default:
            alert('It might be working ' + event.srcElement.id);
    }
    console.log('mainCard');
}

projects.addEventListener('click', changeDisplays);
