import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationControlComponent } from './conversation-control.component';

describe('ConversationControlComponent', () => {
  let component: ConversationControlComponent;
  let fixture: ComponentFixture<ConversationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
