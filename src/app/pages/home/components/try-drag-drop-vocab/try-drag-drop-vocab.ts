import {
  CdkDrag,
  CdkDragDrop,
  CdkDragStart,
  CdkDropList,
  DragDropModule
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
interface VocabItem {
  word: string;
  definition: string;
  placed?: boolean;
}


@Component({
  selector: 'app-try-drag-drop-vocab',
  imports: [CdkDropList, CdkDrag, DragDropModule],
  templateUrl: './try-drag-drop-vocab.html',
  styleUrl: './try-drag-drop-vocab.css',
})
export class TryDragDropVocab {
  vocabs: VocabItem[] = [
    { word: 'convince', definition: 'to persuade someone or make someone certain.' },
    { word: 'allocation', definition: 'an amount of money, space, etc. given for a purpose' },
    { word: 'enthusiasm', definition: 'a feeling of energetic interest in an activity; eagerness' },
    { word: 'eligible', definition: 'is able to have or do it because they have the right qualifications' }
  ];

  shuffledDefinitions = this.shuffle([...this.vocabs]);
  definitionListIds = this.vocabs.map(v => v.word);
  wordList = this.vocabs.map(v => v.definition);

  pairsCompleted = 0;

  shuffle(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5);
  }

  draggedWord: string | null = null;

  onDragStart(event: CdkDragStart) {
    console.log('Dragging started', event.source.data);
    this.draggedWord = event.source.data.word;
  }

  onDrop(event: CdkDragDrop<VocabItem>, item: VocabItem) {
    console.log('Dropped on:', item);
    console.log('Dragged:', event.item.data.word);

    if (event.item.data.word === item.word) {
      item.placed = true;
      console.log('✅ Correct pair!');
    } else {
      console.log('❌ Wrong pair');
    }
  }
}
