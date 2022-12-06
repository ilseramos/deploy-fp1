import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegistComponent } from './c-regist.component';

describe('CRegistComponent', () => {
  let component: CRegistComponent;
  let fixture: ComponentFixture<CRegistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRegistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
