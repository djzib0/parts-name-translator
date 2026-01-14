import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nozzle } from './nozzle';

describe('Nozzle', () => {
  let component: Nozzle;
  let fixture: ComponentFixture<Nozzle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nozzle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nozzle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
