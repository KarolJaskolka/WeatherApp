import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cityForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.cityForm = this.formBuilder.group({
      city: [null, Validators.required]
    })
  }

  onSubmit(){
    let cityName = this.cityForm.get('city').value.replace(/ /g,'-');
    this.router.navigate(['/location'], { queryParams: { city: cityName }});
  }

}
