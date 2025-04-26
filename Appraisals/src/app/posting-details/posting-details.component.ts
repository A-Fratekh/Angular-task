import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posting-details',
  imports: [CommonModule],
  templateUrl: './posting-details.component.html',
  styleUrl: './posting-details.component.css'
})
export class PostingDetailsComponent {
  posting :any;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService){
  }


  ngOnInit(): void {
  const postingId  = this.activeRouter.snapshot.paramMap.get('id');
  if(postingId){
    this.dataService.getPostibgById(postingId).subscribe((data:any)=>{
      this.posting=data;
    });
  }
  }
}
