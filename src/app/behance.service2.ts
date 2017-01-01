import { Injectable } from '@angular/core';

import { Jasonp } from '@angular/http'; 

import 'rxjs/Rx'; 

@Injectable()
export class BehanceService {
  private username:string = 'toyuko';
  private api_key = 'MtQ5NCfDvZyKYtyCdxgwiEpcQ3zMAh0M'; 

  constructor(private _jasonp: Jasonp) { }

  getProjects() { 
    return this._jasonp.get('http://www.behance.net/v2/users/'+this.username+'/project?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
      .map(res => res.json()); 
  }

  getProjects(project_id) { 
    return this._jasonp.get('http://www.behance.net/v2/projects/'+project_id+'?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
      .map(res => res.json()); 
}

}