import { Injectable } from '@angular/core';

import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BehanceService {
  private username:string = 'Toyuko';
  private api_key = 'MtQ5NCfDvZyKYtyCdxgwiEpcQ3zMAh0M';

  constructor(private _jsonp: Jsonp) { }

  getProjects() {
    return this._jsonp.get('http://www.behance.net/v2/users/'+this.username+'/projects?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
      .map(res => res.json());
  }

  getProject(project_id) {
    return this._jsonp.get('http://www.behance.net/v2/projects/'+project_id+'?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
      .map(res => res.json());
  }

}
