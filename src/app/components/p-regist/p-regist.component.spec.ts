import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRegistComponent } from './p-regist.component';

describe('PRegistComponent', () => {
  let component: PRegistComponent;
  let fixture: ComponentFixture<PRegistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRegistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
