const mainDisplay = document.getElementById('info');
const sideDisplay = document.getElementById('display');
const art = document.getElementById('art');
const projects = document.getElementById('projects');
const updates = document.getElementById('updates');
const gallery = document.getElementById('gallery');
const cards = document.getElementsByClassName('card');
const pictures = ['<img src="https://breakingb0x3s.github.io/Portfolio/img/zune.jpg">', '<img src="https://breakingb0x3s.github.io/Portfolio/img/gulllina.jpg">','<img src="https://breakingb0x3s.github.io/Portfolio/img/foxtattoo.jpg">','<img src="https://breakingb0x3s.github.io/Portfolio/img/panda.jpg">','<img src="https://breakingb0x3s.github.io/Portfolio/img/timekiller.jpg">','<img src="https://breakingb0x3s.github.io/Portfolio/img/joker.jpg">'];
const picDescriptions = ['<h2>Zune</h2><h4>2009</h4><br><p>This is an OC (original character) I designed with my younger brother, she was heavily inspired by Spike Segal and Shinobu Jacobs.  <br>The naming convention was inspired by Akira Toriyama, but instead of naming our characters after food we used music players.  <br>His OC was named San for "Sandisk"</p>','<h2>Gull & Lina</h2><h4>2010</h4><br><p>This is of two original characters, mine Gull (who is riding in front with the eyepatch) and Lina who was created by my old friend on DeviantArt who went by Tofubeast.  <br>This was a recreaction of the cover of Dragon Ball vol. 2</p>','<h2>Flower Fox</h2><h4>2009</h4><br><p>This was a tattoo that was commissioned by my friend who goes by DJ Taifu.  I had a lot of fun working with the curves and trying to make them fluid.  This was one of the first pieces I made for a tattoo.</p>','<h2>Panda eyes</h2><h4>~2007</h4><br><p>This was a piece I did around Halloween, I originally posted in 2007 but it was sitting in my sketch book for a while.  I wanted to compare my cartoonish style vs a more realistic take on the same subject.</p>','<h2>Time is a Killer</h2><h4>2008</h4><br><p>This brings back memories.  I made this piece shortly after beating the game The World Ends With You for the Nintendo DS.  I was smitten with the character designs and overall positive punk feel of the game and tried to capture that feeling with this piece.</p>','<h2>Drop Dead Georgous</h2><h4>2008</h4><br><p>I was pretty proud of this piece but it is obviously unfinished.  I would like to find time to do an updated version of this, I like the concept but the lack of a real background takes away from any real impact this piece could have.</p>'];
//Main components of the portfolio are listed above
let cardData;
let displayData;


//Testing, I will attempt to have the project contents switch to the main and side displays when clicked, but then need the aboutMe info to be stored in the clicked on card.  Need to take into account if the next card clicked, the aboutMe info doesn't accidently erase previous card data.
let nextArt = () =>{

    let currentImage = pictures.indexOf(document.getElementById('viewImage').innerHTML);
    if(currentImage === 5){
        document.getElementById('viewImage').innerHTML = pictures[0];
        sideDisplay.innerHTML = picDescriptions[0];
    }else{
        document.getElementById('viewImage').innerHTML = pictures[currentImage+1];
        sideDisplay.innerHTML = picDescriptions[currentImage+1];
    }
    
}

let lastArt = () =>{

    let currentImage = pictures.indexOf(document.getElementById('viewImage').innerHTML);
    if(currentImage === 0){
        document.getElementById('viewImage').innerHTML = pictures[5];
        sideDisplay.innerHTML = picDescriptions[5];
    }else{
        document.getElementById('viewImage').innerHTML = pictures[currentImage-1];
        sideDisplay.innerHTML = picDescriptions[currentImage-1];
    }
    
}

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
                    document.getElementById('artGallery').style.display = 'none';
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
            //Below are Project explanation events
            document.getElementById('dasmotos').addEventListener('mouseover', ()=>{
            document.getElementById('pdescriptions').getElementsByClassName('dasmotos').style.opacity = 1;
            }, false);
            document.getElementById('dasmotos').getElementsByTagName('a')[0].addEventListener('mouseleave', ()=>{
            document.getElementsByClassName('dasmotos').style.opacity = 0;
            }, false);
            break;
        case 'art':
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
                    document.getElementById('artGallery').style.display = none;
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
            document.getElementById('artGallery').hidden = false;
            mainDisplay.innerHTML = '<div class="mainCard" id="mainArt">' + art.innerHTML + '</div>';
            gallery.appendChild(displayData);
            document.getElementById('art').remove();
            sideDisplay.innerHTML = picDescriptions[0];
            document.getElementById(displayData.id).addEventListener('click', changeDisplays);
            document.getElementById('artRight').addEventListener('click', nextArt);
            document.getElementById('artLeft').addEventListener('click', lastArt);
            document.getElementById('artGallery').style.display = 'grid';
            break;
        case 'updates':
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
                    document.getElementById('artGallery').style.display = 'none';
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
            document.getElementById('dates').hidden = false;
            mainDisplay.innerHTML = '<div class="mainCard" id="mainUpdates">' + updates.innerHTML + '</div>';
            gallery.appendChild(displayData);
            document.getElementById('updates').remove();
            sideDisplay.innerHTML = '<div class="contact"><img src="https://www.clipartmax.com/png/middle/457-4579559_gudetama-egg-sanrio-cute-kawaii-yolk-gudetama-cute.png" alt="#gudetama #egg #sanrio #cute #kawaii #yolk - Gudetama Cute@clipartmax.com"><br><br><h3>Contact Me:</h3><ul><li>emal: rtrobinson28@gmail.com</li><li><a href="https://www.linkedin.com/in/riley-robinson-0a19605b/">LinkedIn</a></li></ul></div>';
            document.getElementById(displayData.id).addEventListener('click', changeDisplays);
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
                    document.getElementById('artGallery').style.display = 'none';
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
            sideDisplay.innerHTML = '<img src="https://breakingb0x3s.github.io/Portfolio/img/115906251.png">';
            document.getElementById(displayData.id).addEventListener('click', changeDisplays);
            break;
        default:
            alert('It might be working ' + event.srcElement.id);
    }
    console.log('mainCard');
}

projects.addEventListener('click', changeDisplays);
art.addEventListener('click', changeDisplays);
updates.addEventListener('click', changeDisplays);