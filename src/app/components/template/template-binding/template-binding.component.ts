import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public Name = 'Vini';
  public Age = 27;
  public condition = this.Age > 18 ? "CADEIA NELE" : "SEM CADEIA"

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }
}
