import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentEditorPanelComponent } from './fragment-editor-panel.component';

describe('FragmentEditorComponent', () => {
  let component: FragmentEditorPanelComponent;
  let fixture: ComponentFixture<FragmentEditorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentEditorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentEditorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
