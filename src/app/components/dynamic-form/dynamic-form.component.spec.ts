import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let event: Event;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(DynamicFormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));
  /* it('form should be invalid', async(() => {
    Object.keys(component.form.controls).forEach(field => {
       component.form.get(field).setValue('');
    });
    expect(component.form.valid).toBeFalsy();
  }));
  it('form should be valid', async(() => {
    Object.keys(component.form.controls).forEach(field => {
    //  component.form.get(field).setValue('');
    });
    expect(component.form.valid).toBeTruthy();
  }));
  it('should call onSubmit method', async(() => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.classList.contains('success')).toBeTruthy();
    expect(button.classList.contains('danger')).toBeFalsy();
    button.click();
    expect(component.submit).toHaveBeenCalledTimes(0);
  })); */

  it('should create', () => {
    expect(component).toBeTruthy;
  });
});
