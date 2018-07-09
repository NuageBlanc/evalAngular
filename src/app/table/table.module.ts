import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonneesTableComponent } from './donnees-table/donnees-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Commerce } from '../shared/commerce';
import { MatTableDataSource } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatFormFieldModule
  ],
  declarations: [DonneesTableComponent]
})
export class TableModule {

  dataSource: MatTableDataSource<Commerce>;
 }
