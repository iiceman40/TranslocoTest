import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslocoService, TranslocoTestingModule } from '@ngneat/transloco';
import { take } from 'rxjs/operators';
import SpyObj = jasmine.SpyObj;
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;

  const translocoService: SpyObj<TranslocoService> = jasmine.createSpyObj(
    'translocoService',
    {
      selectTranslate: of('mock-translation'),
    }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TranslocoTestingModule],
      providers: [
        {
          provide: TranslocoService,
          useValue: translocoService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dynamically translate the text', () => {
      component.ngOnInit();
      component.dynamicallyTranslatedText$
        .pipe(take(1))
        .subscribe((textValue) => {
          expect(textValue).toEqual('mock-text');
        });
    });
  });
});
