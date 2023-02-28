import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogDetail',
  templateUrl: './dialogDetail.component.html',
  styleUrls: ['./dialogDetail.component.scss']
})
export class DialogDetailComponent {
  productForm !: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public passData : any,
      private formBuilder : FormBuilder,
){}
  ngOnInit(): void{
    this.productForm = this.formBuilder.group({
        productName : ['',Validators.required],
        category : ['',Validators.required],
        freshness : ['Brand New',Validators.required],
        price : ['',Validators.required],
        comment : ['',Validators.required],
        date : ['',Validators.required]
      })
    if(this.passData) {
      this.productForm.controls['productName'].setValue(this.passData.productName)
      this.productForm.controls['category'].setValue(this.passData.category)
      this.productForm.controls['freshness'].setValue(this.passData.freshness)
      this.productForm.controls['date'].setValue(this.passData.date)
      this.productForm.controls['price'].setValue(this.passData.price)
      this.productForm.controls['comment'].setValue(this.passData.comment)
    }
  }
}
