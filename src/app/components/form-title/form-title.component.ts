import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/Field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.css']
})
export class FormTitleComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
