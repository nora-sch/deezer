let container = document.querySelector('.album-list');
let listBox = document.createElement('ul');
listBox.classList.add('title-list');
container.append(listBox);

data.forEach(album => {
    listBox.insertAdjacentHTML('beforebegin', `<li>${album.title}</li>`)
    console.log(album.title);
});

