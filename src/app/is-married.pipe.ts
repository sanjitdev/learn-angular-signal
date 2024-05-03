import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isMarried',
  standalone: true,
})
export class IsMarriedPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): string {
    return value ? 'Married' : 'Happy';
  }
}
