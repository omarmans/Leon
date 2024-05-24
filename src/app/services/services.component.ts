import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      i: 'fas fa-palette fa-2x',
      h3: 'UI & UX',
      p: 'Graphic design involves visually communicating ideas and solving problems through typography, photography, and illustration.',
    },
    {
      i: 'fab fa-sketch fa-2x',
      h3: 'UI & UX',
      p: 'Enhancing user satisfaction with a product involves improving usability, accessibility, and interaction pleasure.',
    },
    {
      i: 'fas fa-vector-square fa-2x',
      h3: 'Web Design',
      p: 'Web design involves various skills and disciplines in creating and maintaining websites.',
    },
    {
      i: 'fas fa-pencil-ruler fa-2x',
      h3: 'Web Development',
      p: 'Web development encompasses the tasks associated with creating websites for the Internet or an intranet.',
    },
  ];
  img = 'services.jpg';
}
