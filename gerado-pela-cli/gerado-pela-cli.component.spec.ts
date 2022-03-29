import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradoPelaCliComponent } from './gerado-pela-cli.component';

describe('GeradoPelaCliComponent', () => {
  let component: GeradoPelaCliComponent;
  let fixture: ComponentFixture<GeradoPelaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradoPelaCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradoPelaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
