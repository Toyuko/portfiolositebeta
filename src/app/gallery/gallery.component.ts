import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { BehanceService } from '../behance.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'], 
  animations: [

    trigger('slideIn',[

      state('in', style({transform: 'translateX(0)'})),
      
      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}), 
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  projects: any;
  state: string = 'inactive'; 

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects() .subscribe(projects => {
      this.projects = projects.projects; 
    })
  }

}
