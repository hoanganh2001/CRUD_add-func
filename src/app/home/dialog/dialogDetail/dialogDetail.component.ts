import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dialogDetail',
  templateUrl: './dialogDetail.component.html',
  styleUrls: ['./dialogDetail.component.scss'],
  providers: [DatePipe]

})
export class DialogDetailComponent {
  displayedColumns: string[] = ['productName', 'category', 'price', 'comment','dateStart','dateEnd','freshness'];
  productForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  startDate : any;
  constructor(    @Inject(MAT_DIALOG_DATA) public editData : any,
  private formBuilder : FormBuilder,
  private datePipe: DatePipe
){}

  ngOnInit(): void{
    // this.getAProducts(this.row)
    this.productForm = this.formBuilder.group({
      productName : ['',Validators.required],
      category : ['',Validators.required],
      freshness : ['Brand New',Validators.required],
      price : ['',Validators.required],
      comment : ['',Validators.required],
      dateStart : ['',Validators.required],
      dateEnd : ['',Validators.required]
    })
    console.log()
    this.productForm.controls['productName'].setValue(this.editData.productName)
    this.productForm.controls['category'].setValue(this.editData.category)
    this.productForm.controls['freshness'].setValue(this.editData.freshness)
    this.productForm.controls['dateStart'].setValue(this.datePipe.transform(this.editData.dateStart, "dd-MM-yyyy"))
    this.productForm.controls['dateEnd'].setValue(this.datePipe.transform(this.editData.dateEnd, "dd-MM-yyyy"))
    this.productForm.controls['price'].setValue(this.editData.price)
    this.productForm.controls['comment'].setValue(this.editData.comment)

  }

}
