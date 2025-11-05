import { Component, ContentChild, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-validator',
  imports: [],
  templateUrl: './validator.html',
  styleUrl: './validator.css',
})
export class Validator {
  @ContentChild(FormControlName) control!: FormControlName;
  @Input() label!: string;
  @Input() required: boolean = false;
  @Input() errorMessage: string | null = null;
}
