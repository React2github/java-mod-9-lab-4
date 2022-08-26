import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderMessageComponent } from './sender-message.component';

describe('SenderMessageComponent', () => {
  let component: SenderMessageComponent;
  let fixture: ComponentFixture<SenderMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
