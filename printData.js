let container = document.querySelector('.album-list');
let listBox = document.createElement('ul');
listBox.classList.add('title-list');
container.append(listBox);

data.forEach(album => {
    // titles
    listBox.insertAdjacentHTML('afterbegin', `<li><img src="${album.album.cover_medium} " alt="${album.album.title}">${album.title}</li>`)
    console.log(album.title);

    // images
    console.log(album.album.cover_medium);
});

