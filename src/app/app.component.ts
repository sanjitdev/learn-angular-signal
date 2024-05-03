import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsMarriedPipe } from './is-married.pipe';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Person {
  name: string;
  email: string;
  phone: string;
  age: number;
  married: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IsMarriedPipe, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  personsSignal = signal<Person[]>([
    {
      name: 'Sanjit Majumdar',
      email: 'sanjit@gmail.com',
      phone: '+984234243234',
      age: 29,
      married: false
    }
  ]);

  totalPersonSignal = computed(() => this.personsSignal().length);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    age: new FormControl(18, Validators.required),
    married: new FormControl(false)
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      
  }

  onSubmit(): void {
    const newPerson: Person = this.form.getRawValue() as Person;

    this.personsSignal.update(persons => {
      return [
        ...persons,
        newPerson
      ]
    });

    this.form.reset();
  }
}
