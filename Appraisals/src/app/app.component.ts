import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppraisalService } from './appraisal.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  appraisalList: any[] = [];

  constructor(private appraisalService: AppraisalService) {}

  ngOnInit(): void {
    this.appraisalService.getAppraisals().subscribe(data => {
      this.appraisalList = data;
    });
}
}
