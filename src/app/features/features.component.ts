import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  feats = [
    {
      i: 'fas fa-magic fa-3x',
      h3: 'Tell Us Your Idea',
      p: ' Share your thoughts, let creativity flow. We`re listening.',
    },
    {
      i: 'far fa-gem fa-3x',
      h3: 'We Will Do All The Work',
      p: ' Sit back, relax, leave it to us. We`ve got this.',
    },
    {
      i: 'fas fa-globe-asia fa-3x',
      h3: 'Your Product is Worldwide',
      p: 'From here to everywhere, reach global markets effortlessly.',
    },
  ];
}
