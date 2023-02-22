import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransferComponent } from './historial-transfer.component';

describe('HistorialTransferComponent', () => {
  let component: HistorialTransferComponent;
  let fixture: ComponentFixture<HistorialTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
