import { Component } from '@angular/core';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent  {

  fretList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  fretNumberToDisplay = [4, 6, 8, 11];
  notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  gammes = [{
    'id': 1,
    'name' : 'majeure',
    'thirdNoteIndex': 2,
    'intervalles' : [2, 2, 1, 2, 2, 2, 1]
  }, {
    'id': 2,
    'name' : 'mineure naturelle',
    'thirdNoteIndex': 2,
    'intervalles' : [2, 1, 2, 2, 1, 2, 2]
  }, {
    'id': 3,
    'name' : 'mineure harmonique',
    'thirdNoteIndex': 2,
    'intervalles' : [2, 1, 2, 2, 1, 3, 1]
  },
  {
    'id': 4,
    'name' : 'pentatonique mineure',
    'thirdNoteIndex': 1,
    'intervalles' : [3, 2, 2, 3, 2]
  },
  {
    'id': 5,
    'name' : 'pentatonique majeure',
    'thirdNoteIndex': 1,
    'intervalles' : [2, 2, 3, 2, 3]
  },
  {
    'id': 6,
    'name' : 'dorien',
    'thirdNoteIndex': 5,
    'intervalles' : [2, 1, 2, 2, 2, 1, 2]  },
];
  stringsList = [
        {
          'vide' : 'E',
          'notes': ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
          bassString : false
        },
        {
          'vide' : 'B',
          'notes': ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
          bassString : false
        },
        {
          'vide' : 'G',
          'notes': ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
          bassString : true
        },
        {
          'vide' : 'D',
          'notes': ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'],
          bassString : true
        },
        {
          'vide' : 'A',
          'notes': ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'],
          bassString : true
        },
        {
          'vide' : 'E',
          'notes': ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
          bassString : true
        }
    ];
    displayedStrings =  [...this.stringsList];
    isBass = false;

    currentScaleNotes: string[] =[];

    selectedNote = '';
    selectedGamme = 0;

    changeScale() {

      setTimeout(() => {
        this.currentScaleNotes = [];
        if (this.selectedGamme && this.selectedNote) {
          this.currentScaleNotes.push(this.selectedNote);

          let intervalleCumul = this.notes.indexOf(this.selectedNote);

          this.gammes.find(x => x.id === this.selectedGamme)?.intervalles.forEach(intervalle => {
            intervalleCumul = intervalleCumul + intervalle;
            if (intervalleCumul >= this.notes.length) {
              intervalleCumul = intervalleCumul - this.notes.length;
            }
            this.currentScaleNotes.push(this.notes[intervalleCumul]);
          });
        }
      });
    }

    isNoteInCurrentScale(note: string) {

      // if(note === 'A') debugger
      return this.currentScaleNotes && this.currentScaleNotes.length ? this.currentScaleNotes.indexOf(note) > -1 : true;
    }

    isNoteTonic(note: string) {
      return this.currentScaleNotes && this.currentScaleNotes.length ? this.currentScaleNotes.indexOf(note) === 0 : false;
    }

    isNoteThird(note: string) {
      return this.currentScaleNotes && this.currentScaleNotes.length && this.selectedGamme ?
      this.currentScaleNotes.indexOf(note) ===
      this.gammes.find(x => x.id === this.selectedGamme)?.thirdNoteIndex : false;
    }

    toggleBass() {
      if(this.isBass) {
        this.displayedStrings =  [...this.stringsList];
      } else {
        this.displayedStrings =  [...this.stringsList.filter(string => string.bassString)];
      }
    }

}


