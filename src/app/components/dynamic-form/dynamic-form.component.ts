import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FieldConfig } from '../../models/Field.interface';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { CustomValidationAndMessage } from '../validations/custom-validation-and-message';

@Component({
  // tslint:disable-next-line:component-selector
  exportAs: 'dynamicForm',
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  formSubmited = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }
  get value() {
    return this.form.value;
  }
  onSubmit(event: Event) {
    this.formSubmited = true;
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.formSubmited = true;
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  createControl() {
    const group = this.fb.group({});
    if (this.fields) {
      this.fields.forEach(field => {

        if (field.validations) {
          field.validations.forEach(key => {
            CustomValidationAndMessage.createValidator(field.label , key);
          });
        }
        if (field.type !== 'button' && field.type !== 'object') {
          const control = this.fb.control(
            field.value,
            this.bindValidations(field.validations || [])
          );
          group.addControl(field.name, control);
          // console.log(control.errors);
        }
      });
    }
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
