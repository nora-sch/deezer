let container = document.querySelector(".album-list");
let listBox = document.createElement("ul");
listBox.classList.add("list");
container.append(listBox);
let displayedAlbums = [];
let isPlayOn = false;
data.forEach((album) => {
  if (!displayedAlbums.includes(album.album.id)) {
    displayedAlbums.push(album.album.id);
    // titles
    let oneAlbum = document.createElement("li");
    listBox.append(oneAlbum);
    oneAlbum.insertAdjacentHTML(
      "beforeend",
      `<li>
        <img src="${album.album.cover_medium} " alt="${album.album.title}">
        ${album.title}
        <div class='play-button' name='${album.preview}'>
          <i class="fa-solid fa-play play-icon" id='play-${album.preview}'></i>
        </div>
        <audio controls class='play hidden' name='${album.preview}'">
          <source src=" ${album.preview}" type="audio/mp3"> 
        </audio>
        <a href="${album.link}">
            LINK
        </a>
    `
    );
    // console.log(album.title);

    // images
    // console.log(album.album.cover_medium);

    // tracks
    // console.log(album.preview);
    // console.log(album.link);
  }
});

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((btn) => {
  let attribute = btn.getAttribute("name");
  let playIcon = document.querySelector(`i[id = 'play-${attribute}']`);
  let pauseIcon = document.querySelector(`i[id = 'pause-${attribute}']`);

  btn.addEventListener("click", (event) => {
    let player = document.querySelector(`audio[name='${attribute}']`);
    console.log(btn);
    playIcon.style.color = 'red';
    // see how to pause other players
    if (!isPlayOn) {
      player.play();
      isPlayOn = true;
      btn.innerHTML =  `<i class="fa-solid fa-pause pause-icon" id='pause-${attribute}'></i>`
      console.log(pauseIcon);
      console.log(playIcon);
      console.log("play");
    } else {
      player.pause();
      isPlayOn = false;
      console.log(pauseIcon);
      console.log(playIcon);
      console.log("pause");
      btn.innerHTML =  `<i class="fa-solid fa-play play-icon" id='play-${attribute}'></i>`;  
    }
    console.log('isPlayOn');
    console.log(isPlayOn);
  });
});
