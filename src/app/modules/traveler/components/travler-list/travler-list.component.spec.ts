import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravlerListComponent } from './travler-list.component';

describe('TravlerListComponent', () => {
  let component: TravlerListComponent;
  let fixture: ComponentFixture<TravlerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravlerListComponent]
    });
    fixture = TestBed.createComponent(TravlerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
