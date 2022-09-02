import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePropertyDTO } from 'src/app/models/property/createPropertyDTO';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  states = ["AK - Alaska", 
  "AL - Alabama", 
  "AR - Arkansas", 
  "AS - American Samoa", 
  "AZ - Arizona", 
  "CA - California", 
  "CO - Colorado", 
  "CT - Connecticut", 
  "DC - District of Columbia", 
  "DE - Delaware", 
  "FL - Florida", 
  "GA - Georgia", 
  "GU - Guam", 
  "HI - Hawaii", 
  "IA - Iowa", 
  "ID - Idaho", 
  "IL - Illinois", 
  "IN - Indiana", 
  "KS - Kansas", 
  "KY - Kentucky", 
  "LA - Louisiana", 
  "MA - Massachusetts", 
  "MD - Maryland", 
  "ME - Maine", 
  "MI - Michigan", 
  "MN - Minnesota", 
  "MO - Missouri", 
  "MS - Mississippi", 
  "MT - Montana", 
  "NC - North Carolina", 
  "ND - North Dakota", 
  "NE - Nebraska", 
  "NH - New Hampshire", 
  "NJ - New Jersey", 
  "NM - New Mexico", 
  "NV - Nevada", 
  "NY - New York", 
  "OH - Ohio", 
  "OK - Oklahoma", 
  "OR - Oregon", 
  "PA - Pennsylvania", 
  "PR - Puerto Rico", 
  "RI - Rhode Island", 
  "SC - South Carolina", 
  "SD - South Dakota", 
  "TN - Tennessee", 
  "TX - Texas", 
  "UT - Utah", 
  "VA - Virginia", 
  "VI - Virgin Islands", 
  "VT - Vermont", 
  "WA - Washington", 
  "WI - Wisconsin", 
  "WV - West Virginia", 
  "WY - Wyoming"]

  street: string = ""; 
  zipcode: string = ""; 
  stateVariable: string =""; 
  bathrooms: number =0; 
  bedrooms: number=0; 
  imgUrl: string =""; 


  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleCreateProperty(){
    // create a createPropertyDTO 
    let createPropertyDTO: CreatePropertyDTO = {
      street: this.street, 
      zipcode: this.zipcode, 
      state: this.stateVariable, 
      bedroomCount: this.bedrooms,
      bathroomCount: this.bathrooms,
      imgUrl: this.imgUrl
    }
    // pass the value to a the propertyService 
    const userId = Number(this.route.snapshot.paramMap.get('id')); 
    this.propertyService.createProperty(userId, createPropertyDTO)
    .subscribe(() => {
      this.router.navigateByUrl(`/users/${userId}/properties`);
    }, () => {
      window.alert("fail to create property")
    })
  }



}
