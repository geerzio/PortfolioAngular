import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORKS } from 'src/assets/file/mock-work';
import { WorkModel } from 'src/models/works.model';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  works:WorkModel[]  = WORKS;

  constructor() {}

  getWorks():Observable<WorkModel[]>{

    const trabajo = of(WORKS);
    
    return trabajo;
  }
}
