import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  

  userId?: number; 

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,

    
  ) { }

  ngOnInit(): void {
    this.setUrlParams();
  }


  setUrlParams(){
    const userId = Number(this.route.snapshot.paramMap.get('id')); 
    this.userId = userId; 
  }


}
