import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitizeSubType } from 'src/app/shared/enums/sanitizer-sub-type.enum';
import { SanitizeType } from 'src/app/shared/enums/sanitizer-type.enum';

import { StringSanitizerComponent } from './string-sanitizer.component';

describe('StringSanitizerComponent', () => {
  let component: StringSanitizerComponent;
  let fixture: ComponentFixture<StringSanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringSanitizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sanitize should not throw when SanitizeType = HTML', () => {
    component.selectedType = SanitizeType.HTML;

    expect(() => {
      component.sanitize();
    }).not.toThrow();
  });

  it('sanitize should not throw when SanitizeType = ALL', () => {
    component.selectedType = SanitizeType.ALL;

    expect(() => {
      component.sanitize();
    }).not.toThrow();
  });

  it('removeAllCharacters should not throw', () => {
    expect(() => {
      component.removeAllCharacters();
    }).not.toThrow();
  });

  it('removeAllCharacters without subtypes', () => {
    component.selectedType = SanitizeType.ALL;
    component.selectedSubTypes = [];

    component.dirtyText = 'qwe 123 !@#';
    component.removeAllCharacters();


    expect(component.cleanText).toEqual('qwe123');
  });

  it('removeAllCharacters with Keep Spaces', () => {
    component.selectedType = SanitizeType.ALL;
    component.selectedSubTypes.push(SanitizeSubType.KEEP_SPACES);

    component.dirtyText = 'qwe 123 !@#';
    component.removeAllCharacters();


    expect(component.cleanText).toEqual('qwe 123 ');
  });

  it('removeAllCharacters with Remove Numbers', () => {
    component.selectedType = SanitizeType.ALL;
    component.selectedSubTypes.push(SanitizeSubType.REMOVE_NUMBERS);

    component.dirtyText = 'qwe 123 !@#';
    component.removeAllCharacters();


    expect(component.cleanText).toEqual('qwe  !@#');
  });

  it('removeAllCharacters with Keep Spaces & Remove Numbers', () => {
    component.selectedType = SanitizeType.ALL;
    component.selectedSubTypes.push(SanitizeSubType.KEEP_SPACES);
    component.selectedSubTypes.push(SanitizeSubType.REMOVE_NUMBERS);

    component.dirtyText = 'qwe 123 !@#';
    component.removeAllCharacters();


    expect(component.cleanText).toEqual('qwe  ');
  });
  
  it('sanitizeHtml should not throw', () => {
    expect(() => {
      component.sanitizeHtml();
    }).not.toThrow();
  });

  it('sanitizeHtml should sanitize the input html', () => {
    component.selectedType = SanitizeType.HTML;

    component.dirtyText = '<html><body><h1>Title Test</h1> <br/> Test</body></html>';
    component.sanitizeHtml();


    expect(component.cleanText).toEqual('&lt;html&gt;&lt;body&gt;&lt;h1&gt;Title Test&lt;/h1&gt; &lt;br/&gt; Test&lt;/body&gt;&lt;/html&gt;');
  });
  
  it('manageSubTypes should not throw', () => {
    expect(() => {
      component.manageSubTypes('', '');
    }).not.toThrow();
  });

  it('manageSubTypes should add sub type', () => {
    component.selectedSubTypes = [];

    component.manageSubTypes(true, SanitizeSubType.KEEP_SPACES);
    expect(component.selectedSubTypes.length).toEqual(1);
    
    component.manageSubTypes(true, SanitizeSubType.REMOVE_NUMBERS);
    expect(component.selectedSubTypes.length).toEqual(2);
  });

  it('manageSubTypes should remove sub type', () => {
    component.selectedSubTypes.push(SanitizeSubType.KEEP_SPACES);
    component.selectedSubTypes.push(SanitizeSubType.REMOVE_NUMBERS);

    component.manageSubTypes(false, SanitizeSubType.KEEP_SPACES);
    expect(component.selectedSubTypes.length).toEqual(1);
    
    component.manageSubTypes(false, SanitizeSubType.REMOVE_NUMBERS);
    expect(component.selectedSubTypes.length).toEqual(0);
  });
});
