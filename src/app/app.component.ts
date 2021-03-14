import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dynamicallyTranslatedText$: Observable<string>;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.dynamicallyTranslatedText$ = this.translocoService.selectTranslate(
      'paragraph-dynamically-translated'
    );
  }
}
