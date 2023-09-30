import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionxbComponent } from './multiplicacionxb.component';

describe('MultiplicacionxbComponent', () => {
  let component: MultiplicacionxbComponent;
  let fixture: ComponentFixture<MultiplicacionxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionxbComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
