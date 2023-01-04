// Menu script
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('#nav-menu');
const body = document.querySelector('body');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
}));

// Dynamic Featured speakers

const speakers = [
  {
    name: 'Florentino Pérez',
    academyWork: 'Director',
    description: `75 years old <br>Spanish businessman, civil engineer, former politician, and the current 
    president of Real Madrid as well as Chairman and CEO.`,
    speakerImage: 'img/Florentino_perez.jpg',
  },

  {
    name: 'José Mourinho',
    academyWork: 'Coach',
    description: `59 years old <br>Once dubbed "The Special One" by the British media,
    Mourinho is widely considered to be among the greatest.`,
    speakerImage: 'img/jose-mourinho-1.jpeg',
  },

  {
    name: 'Pep Guardiola',
    academyWork: 'Assistant Coach',
    description: `51 years old <br>Spanish professional football manager and former player, who is the current
    manager of Premier League club Manchester City.`,
    speakerImage: 'img/pep-guardiola.jpeg',
  },

  {
    name: 'Zinedine Zidane',
    academyWork: 'Assistant Coach',
    description: `50 years old <br>French professional football manager and former player who played as an
    attacking midfielder.`,
    speakerImage: 'img/Zinedine_Zidane.jpeg',
  },

  {
    name: 'Grégory Dupont',
    academyWork: 'Fitness Coach',
    description: `50 years old <br>Sports physical trainer, he is known as the scientist since he usually plans
    his workouts based on scientific research.`,
    speakerImage: 'img/gregorgy-dupont.jpeg',
  },

  {
    name: 'Grégory Dupont',
    academyWork: 'Athletic Coach',
    description: `59 years old <br>Italien physical trainer, known as "the sergeant" for the harshness of his
    methods,`,
    speakerImage: 'img/antonio-pintus.jpg',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  document.querySelector('.featured-elem').innerHTML += `<div class="staff-card">
  <div class="staf-img">
      <img src="${speakers[i].speakerImage}" alt="Academy_Staff">
  </div>
  <div class="staff-intro">
      <h3>${speakers[i].name}</h3>
      <h4>${speakers[i].academyWork}</h5>
          <hr>
          <p>${speakers[i].description}</p>
  </div>
</div>`;
}