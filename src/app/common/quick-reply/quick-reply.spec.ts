import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickReply } from './quick-reply';

describe('QuickReply', () => {
  let component: QuickReply;
  let fixture: ComponentFixture<QuickReply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickReply],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickReply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
