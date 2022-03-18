import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPokeComponent } from './api-poke.component';

describe('ApiPokeComponent', () => {
  let component: ApiPokeComponent;
  let fixture: ComponentFixture<ApiPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
