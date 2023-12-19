import { Component } from '@angular/core';
import { TeaService } from '../services/tea/tea.service';
import {Tea} from '../shared/models/Tea';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
{
  teas:Tea[]=[];
  videoPath:string ='assets/images/india.mp4';
  constructor(private teaService: TeaService)
  {

  }
  ngOnInit():void
  {
    this.teas = this.teaService.getAll();
  }
}
