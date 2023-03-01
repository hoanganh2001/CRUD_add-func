import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormGroupDirective ,FormBuilder, Validators, FormControl, NgForm, FormControlName } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { DialogComponent } from '../dialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialogContent',
  templateUrl: './dialogContent.component.html',
  styleUrls: ['./dialogContent.component.scss'],
})

export class DialogContentComponent{
  freshnessList = ["Brand New", "Second Hand", "Refurbished"]
  actionBtn : string = "Save";
  productForm !: FormGroup;
  act !: string;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>,
    private spinner : SpinnerService
    )  {}
    validData(){
      this.productForm = this.formBuilder.group({
        productName : ['',Validators.required],
        category : ['',Validators.required],
        freshness : ['Brand New',Validators.required],
        price : ['',Validators.required],
        comment : ['',Validators.required],
        dateStart : ['',Validators.required],
        dateEnd : ['',Validators.required]
      })
    }
    ngOnInit(): void{
      this.validData();
      if(this.editData) {
      this.actionBtn = "Update";
      this.productForm.controls['productName'].setValue(this.editData.productName)
      this.productForm.controls['category'].setValue(this.editData.category)
      this.productForm.controls['freshness'].setValue(this.editData.freshness)
      this.productForm.controls['dateStart'].setValue(this.editData.dateStart)
      this.productForm.controls['dateEnd'].setValue(this.editData.dateEnd)
      this.productForm.controls['price'].setValue(this.editData.price)
      this.productForm.controls['comment'].setValue(this.editData.comment)
    }
  }

  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.spinner.requestStart();
        this.api.postProduct(this.productForm.value).subscribe({
          next:()=>{
            setTimeout(()=>{
            this.spinner.requestEnd();
            }, 2000);
            this.act = 'add';
            this.productForm.reset();
            this.dialogRef.close('save');

          },
          error:()=>{
            this.spinner.resetSpinner();
            alert("Error while add product!")
          }
        })
      }
    } else {
      this.updateProduct();
    }
  }


  updateProduct(){
    this.spinner.requestStart();
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this.spinner.requestEnd();
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        this.spinner.resetSpinner();
        alert("Error while updating the record!");
      }
    })
  }


}
