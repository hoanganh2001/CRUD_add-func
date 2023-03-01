import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/home/dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { DialogContentComponent } from '../home/dialog/dialogContent/dialogContent.component';
import { DialogDetailComponent } from '../home/dialog/dialogDetail/dialogDetail.component';
import { SpinnerService } from '../spinner/spinner.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'demo';
  displayedColumns: string[] = ['productName', 'category', 'price', 'comment','dateStart','dateEnd','freshness','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog, private api : ApiService,
   private spinner : SpinnerService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if (val === 'save'){
        this.getAllProducts();
      }
    });
  }


  getAllProducts() {
    this.spinner.requestStart();
    this.api.getProduct().subscribe({
      next:(res)=>{
        setTimeout(()=>{
          this.spinner.requestEnd();
        }, 2000)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        this.spinner.resetSpinner();
        alert("Error while fetching the Records!");
      }
    })
  }

  detail(row : any) {
    this.dialog.open(DialogDetailComponent,{
      width:'30%',
      data:row
    })
  }

  editProduct(row : any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update') {
        this.getAllProducts();
      }
    })
  }


  delProduct(row : any){
    this.spinner.requestStart();
    this.api.deleteProduct(row.id).subscribe({
      next:(res)=>{
        this.spinner.requestEnd();
      },
      error:()=>{
        this.spinner.resetSpinner();
      }
    });
    this.getAllProducts();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

