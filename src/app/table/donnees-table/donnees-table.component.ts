import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Commerce } from '../../shared/commerce';
import { GetCommercesService } from '../../core/get-commerces.service';

@Component({
  selector: 'app-donnees-table',
  templateUrl: './donnees-table.component.html',
  styleUrls: ['./donnees-table.component.css']
})
export class DonneesTableComponent implements OnInit {
  displayedColumns: string[] = ['libelle', 'ville', 'codePostal'];
  @Input() dataSource: MatTableDataSource<Commerce>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceCommerce: GetCommercesService) {}

  ngOnInit() {
    this.serviceCommerce.getCommerces().subscribe((data) => {
      console.log(data);
      this.generateTable(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  generateTable(data) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }
}
