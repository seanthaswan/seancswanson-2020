import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isUnder700px: boolean = window.innerWidth < 700;
  projects: Project[] = [
    new Project(
      'nubis.io',
      '../../../assets/nubis-sm.png',
      'A minimal Weather Forecast SPA that enables the user to pick a location from a map or input their desired location. Built with Angular.js and designed from scratch.',
      ['JavaScript', 'Angular.js', 'Leaflet.js', 'HTML', 'LESS', 'CSS Grid'],
      'https://nubis.glitch.me/#/forecast',
      'https://github.com/seanthaswan/Angular-Practice'
    ),
    new Project(
      'The Majesty of the Thirty-Six Views of Mt. Fuji',
      '../../../assets/fuji-sm.png',
      'An interactive gallery of the most iconic collection of Japanese woodblock art by Katsushika Hokusai... in high-resolution!',
      [
        'JavaScript',
        'ES6',
        'Openseadragon.js',
        'SVG.js',
        'HTML',
        'CSS',
        'CSS Grid'
      ],
      'http://majesty-of-36-views.glitch.me/',
      'https://github.com/seanthaswan/osd-woodblocks'
    ),
    new Project(
      'Chairman of the Board',
      '../../../assets/chairman-sm.png',
      "A retro front-end corporate ladder simulator game. I reimagined a game that my father had programmed in basic in the 80's to bring it up to modern specs!",
      ['JavaScript', 'jQuery', 'HTML', 'CSS'],
      '//seancswanson.com/chairman-of-the-board/',
      'https://github.com/seanthaswan/chairman-of-the-board'
    ),
    new Project(
      'Mndf.ll',
      '../../../assets/mndfll-sm.png',
      'A full-stack daily journaling & goal tracking app featuring user auth and database utilization.',
      ['JavaScript', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
      'https://mndfll-js.herokuapp.com/',
      'https://github.com/seanthaswan/mndfll'
    ),
    new Project(
      'Spatium Laboratorium',
      '../../../assets/spatium-sm.png',
      'Experiments in space & time... my interactive laboratory exploring 3D JavaScript and WebGL concepts abstracted by Three.js.',
      ['JavaScript', 'Three.js', 'animation', 'HTML', 'CSS'],
      'https://spatium-laboratorium.glitch.me',
      'https://github.com/seanthaswan/spatium-laboratorium'
    ),
    new Project(
      'Hue',
      '../../../assets/hue-sm.png',
      'Built by two others and myself in a week-long sprint during my bootcamp: A MERN-stack color detection utility for designers featuring cloud uploading & asynchronous operations.',
      [
        'JavaScript',
        'Node.js',
        'React.js',
        'Express',
        'MongoDB',
        'HTML',
        'CSS'
      ],
      'https://use-hue.herokuapp.com',
      'https://github.com/seanthaswan/hue-project3'
    ),
    new Project(
      'Platformy Onion',
      '../../../assets/platformy-sm.png',
      'Dodge, jump, shoot for the stars as Onion! Be the Onion... Live the Onion! A game built with Phaser 3, a game framework for the web.',
      ['JavaScript', 'ES6', 'Phaser.js', 'HTML', 'Canvas', 'CSS'],
      'https://platformy-allium.glitch.me/',
      'https://github.com/seanthaswan/platformy-onion'
    ),
    new Project(
      'Chroma Chameleon',
      '../../../assets/chroma-sm.png',
      'A front-end painting app resembling the nostalgic simplicity of mspaint... soon to add full shape, importing, selection functionalities.',
      ['JavaScript', 'HTML', 'CSS', 'CSS Grid'],
      'https://chroma-chameleon.glitch.me/',
      'https://github.com/seanthaswan/chroma-chameleon'
    ),
    new Project(
      'Pigmentation Presumption',
      '../../../assets/pig-sm.png',
      'A front-end color guessing game to help sharpen your eye for color! Soon to add hex code challenge for the elites.',
      ['JavaScript', 'HTML', 'CSS'],
      'https://pigmentation-presumption.glitch.me/',
      'https://github.com/seanthaswan/pigmentation-presumption'
    ),
    new Project(
      'PokéDex',
      '../../../assets/poke-sm.png',
      'A PEN-stack pokèmon encyclopedia as a study of RESTful API architecture and artistic design.',
      ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML', 'CSS'],
      '',
      'https://github.com/seanthaswan/express-pokedex'
    )
  ];
  constructor() {
    window.addEventListener('resize', () => {
      this.isUnder700px = window.innerWidth < 700;
      console.log(this.isUnder700px);
    });
  }

  ngOnInit() {}
}
