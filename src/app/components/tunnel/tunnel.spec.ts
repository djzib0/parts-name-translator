import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tunnel } from './tunnel';

describe('Tunnel', () => {
  let component: Tunnel;
  let fixture: ComponentFixture<Tunnel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tunnel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tunnel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
