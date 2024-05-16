import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//COMPONENTS
import { CommonModule } from '@angular/common';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NewComponent, RouterOutlet, TemplateBindingComponent],
  template: `
  <h1>Curso de Angular</h1>
  <app-new-component />
  <app-template-binding/>
  `,
})
export class AppComponent {
  title = 'ng-ts-udemy';
}
