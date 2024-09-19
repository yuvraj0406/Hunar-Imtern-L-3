document.addEventListener('DOMContentLoaded', () => {
    const movieList = [
        { 
            title: "Animal", 
            description: "Animal is a gritty and intense Bollywood action thriller that delves into the dark underbelly of crime and violence. The movie follows a complex character, portrayed by Ranbir Kapoor, as he navigates a world of gang wars, personal demons, and the quest for power. Directed by Sandeep Reddy Vanga, this film promises a blend of raw emotion, high-octane action, and a gripping storyline that challenges the boundaries of morality and redemption." ,
            image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-20.jpg" 
        },
        { 
            title: "Mission Raniganj", 
            description: "Mission Raniganj is an inspiring true story based on the life of Jaswant Singh Gill, who led a daring rescue operation to save trapped miners in a flooded coal mine in Raniganj, West Bengal. The film showcases his courage, determination, and resourcefulness as he battles time and overwhelming odds to save lives. With heart-stopping moments and a gripping narrative, this movie highlights a lesser-known yet heroic chapter in Indian history.",
            image: "https://img.etimg.com/thumb/msid-103868938,width-480,height-360,imgsize-73612,resizemode-75/mission-raniganj.jpg" 
        },
        { 
            title: "Kill", 
            description: "Kill is a high-octane action thriller that follows the story of a man on a relentless mission to eliminate those who wronged him. The movie is packed with intense fight sequences, dramatic moments, and a plot that keeps the audience on the edge of their seats. With a focus on raw, visceral action, 'Kill' is a cinematic adrenaline rush from start to finish.",
            image: "https://imgeng.jagran.com/webstories/98464/kill-1719931816.jpeg" 
        },
        {
        title: "Alien", 
        description: "Kill is a high-octane action thriller that follows the story of a man on a relentless mission to eliminate those who wronged him. The movie is packed with intense fight sequences, dramatic moments, and a plot that keeps the audience on the edge of their seats. With a focus on raw, visceral action, 'Kill' is a cinematic adrenaline rush from start to finish.",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_alien_romulus_3216_b0c7a77d.jpeg?region=0,0,540,810"},
    ];
    
   

    const movieListContainer = document.getElementById('movie-list');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.getElementById('close-button');

    // Populate movie list
    movieList.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;

        movieItem.addEventListener('click', () => {
            modalTitle.textContent = movie.title;
            modalDescription.textContent = movie.description;
            modal.style.display = 'flex';
        });

        movieListContainer.appendChild(movieItem);
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Simulate video playback
    document.getElementById('play-button').addEventListener('click', () => {
        alert('Simulating video playback...');
        modal.style.display = 'none';
    });
});
