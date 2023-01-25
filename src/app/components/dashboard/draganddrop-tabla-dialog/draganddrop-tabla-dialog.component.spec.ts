import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraganddropTablaDialogComponent } from './draganddrop-tabla-dialog.component';

describe('DraganddropTablaDialogComponent', () => {
  let component: DraganddropTablaDialogComponent;
  let fixture: ComponentFixture<DraganddropTablaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraganddropTablaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraganddropTablaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
