import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryDragDropVocab } from './try-drag-drop-vocab';

describe('TryDragDropVocab', () => {
  let component: TryDragDropVocab;
  let fixture: ComponentFixture<TryDragDropVocab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryDragDropVocab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryDragDropVocab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
