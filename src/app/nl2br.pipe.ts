import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'nl2br',
  standalone: true
})
export class Nl2brPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    // Replace newline chars with <br/>
    const transformed = value.replace(/\n/g, '<br/>');
    // Bypass security so <br/> is rendered
    return this.sanitizer.bypassSecurityTrustHtml(transformed);
  }
}
