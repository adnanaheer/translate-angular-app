import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2?key=a8ce1f2aa64e45c185d90cf5159c457c-sOuu-l_u6uA';

  constructor(private http: HttpClient) { }

  translate(text: string) {
    return this.http.post(this.url, {
      "q": text,
      "target": "es"
    }).pipe(
      map((res: any) => {
        return res.data.translations[0].translatedText;
      })
    );
  }
}
