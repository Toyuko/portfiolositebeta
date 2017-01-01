import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { BehanceService } from '../behance.service'; 
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'], 
  animations: [

    trigger('slideIn',[

      state('in', style({transform: 'translateX(0)'})),
      
      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}), 
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideInRight',[

      state('true', style({transform: 'translateX(0)', opacity: 1})),
      
      transition('void => *', [
        style({transform: 'translateX(150px)', opacity: '0'}), 
        animate('300ms 500ms ease-out')
      ])
    ]),
    trigger('slider',[

      state('true', style({transform: 'scaleY(0)'})),
      
      transition('void => *', [
        style({transform: 'scaleY(1)', opacity: '0'}), 
        animate('300ms 800ms ease-in')
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {
  project: any;
  state: string = 'out'; 
  state2: string = 'true'; 
  constructor(private _behanceService: BehanceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let project_id = params['id']

      this._behanceService.getProject(project_id).subscribe(projects => { 
        this.project = projects.project; 
        console.log(this.project); 
      })
    })
  }

}
