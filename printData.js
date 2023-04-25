let container = document.querySelector(".album-list");
let listBox = document.createElement("ul");
listBox.classList.add("list");
container.append(listBox);
let displayedAlbums = [];
data.forEach((album) => {
  if (!displayedAlbums.includes(album.album.id)) {
    displayedAlbums.push(album.album.id);
    // titles
    let audioSource = album.preview;
    listBox.insertAdjacentHTML(
      "beforeend",
      `<li>
        <img src="${album.album.cover_medium} " alt="${album.album.title}">
        ${album.title}
        <div class='play-button' name='${album.preview}'>PLAY</div>
        <audio controls class='play hidden' name='${album.preview}'">
        <source src=" ${album.preview}" type="audio/mp3">
        </audio>
        <a href="${album.link}">
            LINK
        </a>
    </li>`
    );
    console.log(album.title);

    // images
    console.log(album.album.cover_medium);

    // tracks
    console.log(album.preview);
    console.log(album.link);
  }
});

const playButtons = document.querySelectorAll(".play-button");
let isPlayOn = false;
playButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event);
    let attribute = btn.getAttribute("name");
    console.log(attribute);
    let player = document.querySelector(`audio[name='${attribute}']`);
    // see how to pause other players
    if (!isPlayOn) {
      player.play();
      isPlayOn = true;
      console.log("play");
    } else {
      player.pause();
      isPlayOn = false;
      console.log("pause");
    }
  });
});
