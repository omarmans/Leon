import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      src: 'M-R-M.jpg',
      h3: 'M-R-M',
      p: '"M-R-M: Your digital gateway to innovation, efficiency, and success in the online marketplace."',
      link: 'https://omarmans.github.io/M-R-M/',
    },
    {
      src: 'weather.jpg',
      h3: 'Weather',
      p: 'Get instant Weather updates: Your go-to destination for accurate forecasts and real-time weather conditions.',
      link: 'https://omarmans.github.io/Weather/',
    },
    {
      src: 'portfolio-3.jpg',
      h3: 'Project Here',
      p: 'My creative ability is very difficult to measure because it can manifest in so many surprising and.',
      // link: 'https://omarmans.github.io/Weather/',
    },
  ];

  constructor(private router: Router) {}

  go_link(link: string | undefined) {
    console.log(this.projects);
    console.log(link);
    if (link) {
      if (link.startsWith('http')) {
        console.log(link + 'beebe');

        window.open(link, '_blank');
      } else {
        console.log(link + 'adsgjadpg');
        this.router.navigate([link]);
      }
    }
  }
}
