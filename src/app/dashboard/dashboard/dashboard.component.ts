import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit  {
  
  displayedColumns: string[] = ['id', 'name', 'price', 
  'cookTime','origin','Stars','Tags','edit','delete'];


  id:any;
  // foods$:Observable<Food[]>;
  // dataSource = new MatTableDataSource<any>(this.foodService.getAll());
  // me trying
  foods:any;
  dataSource = new MatTableDataSource<Food[]>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private foodService:FoodService,
              private _liveAnnouncer: LiveAnnouncer,
              private route: ActivatedRoute,
              private router:Router) { 
                
              }
  
  

  ngOnInit(): void {
    // this.foods$=this.foodService.getAll()
//     this.foodService.getAll().subscribe ( foods => {
//       this.dataSource.data = foods;
// })

// my exp
this.foods =this.foodService.getAll().subscribe ( foods => {
        this.dataSource.data = foods;
  })
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  onDelete(id:any){
    // this.id = this.route.snapshot.paramMap.get("id");
    // console.log("this id is:"+this.id);
    console.log("id is:"+id);
    this.foodService.onDelete(id).subscribe(res=>{
      console.log(res);
      // window.location.reload();
      this.router.navigateByUrl('/home')
    });

  }

  applyFilter(event: Event) {
    let filterValue=(<HTMLInputElement>event.target).value; 
    filterValue = filterValue.trim().toLowerCase()
    this.dataSource.filter = filterValue;
  }
  

}
