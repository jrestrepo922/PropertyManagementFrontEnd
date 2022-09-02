import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPropertiesDTO } from 'src/app/models/property/getPropertiesDTO';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: GetPropertiesDTO[] = []; 
  
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
  ) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(){
    const userId = Number(this.route.snapshot.paramMap.get('id')); 
    this.propertyService.getProperties(userId)
    .subscribe(getPropertiesDTO => {
      this.properties = getPropertiesDTO;
      debugger
    })
  }

}
