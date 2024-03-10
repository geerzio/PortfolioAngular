import { Component, Input, OnInit } from '@angular/core';
import { WORKS } from 'src/assets/file/mock-work';
import { WorkModel } from 'src/models/works.model';
import { WorkListService } from '../services/work-list.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.css']
})
export class WorksDoneComponent implements OnInit{
  @Input() work:string = "";

  worksList:WorkModel[]  = WORKS;

  constructor(private WorkListService: WorkListService ){ }
  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void{
    this.WorkListService.getWorks().subscribe((workResult) => {
      this.worksList = workResult
    });
  }

}
