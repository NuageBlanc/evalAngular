import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesTableComponent } from './donnees-table.component';

describe('DonneesTableComponent', () => {
  let component: DonneesTableComponent;
  let fixture: ComponentFixture<DonneesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
