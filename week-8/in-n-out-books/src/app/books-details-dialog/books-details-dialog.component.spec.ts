import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailsDialogComponent } from './books-details-dialog.component';

describe('BooksDetailsDialogComponent', () => {
  let component: BooksDetailsDialogComponent;
  let fixture: ComponentFixture<BooksDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
