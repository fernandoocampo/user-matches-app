import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { By }              from '@angular/platform-browser';

import { MatchesComponent } from './matches.component';
import { UserFinderService } from '../user-finder.service';
import { Configuration } from '../../app.constants';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;
  let _tagListEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [ Configuration, UserFinderService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default Search Form in h1 tag', () => {
    //const fixture = TestBed.createComponent(MatchesComponent);
    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toEqual('Search Form');
  });

  it('Form child elements Count', () => {
    _tagListEl = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.detectChanges();
    expect(_tagListEl.childElementCount).toEqual(9);
  });
  
});
