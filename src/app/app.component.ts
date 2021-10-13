import { Component } from '@angular/core';
import { TranslateService } from './components/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'translat-app';

  text: string;
  translatedText: string;

  constructor(private translateService: TranslateService) {}

  submit() {
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    })
  }
}
