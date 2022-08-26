import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationThreadComponent } from './conversation-thread.component';

describe('ConversationThreadComponent', () => {
  let component: ConversationThreadComponent;
  let fixture: ComponentFixture<ConversationThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationThreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
