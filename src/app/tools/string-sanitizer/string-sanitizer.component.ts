import { Component, OnInit } from '@angular/core';
import { SanitizeSubType } from 'src/app/shared/enums/sanitizer-sub-type.enum';
import { SanitizeType } from 'src/app/shared/enums/sanitizer-type.enum';

@Component({
  selector: 'app-string-sanitizer',
  templateUrl: './string-sanitizer.component.html',
  styleUrls: ['./string-sanitizer.component.css']
})
export class StringSanitizerComponent implements OnInit {

  dirtyText = '';
  cleanText = '';

  SanitizeType = SanitizeType;
  selectedType = SanitizeType.HTML;
  SanitizeSubType = SanitizeSubType;
  selectedSubTypes: SanitizeSubType[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  sanitize() {

    switch (this.selectedType) {
      case SanitizeType.HTML:
        this.sanitizeHtml();
        break;
      case SanitizeType.ALL:
        this.removeAllCharacters();
        break;
    }
  }

  removeAllCharacters(){

    let tempText = this.dirtyText;

    if (this.selectedSubTypes.length > 0) {
      if (this.selectedSubTypes.includes(SanitizeSubType.KEEP_SPACES)){
        tempText = tempText.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").replace(/ /g, " ");
        
        
      }
      
      if (this.selectedSubTypes.includes(SanitizeSubType.REMOVE_NUMBERS)) {
        tempText = tempText.replace(/[0-9]/g, "");
      }

    } else {
      tempText = tempText.replace(/[^a-zA-Z0-9]/g, "");
    }
    
    this.cleanText = tempText;
  }

  sanitizeHtml() {
    this.cleanText = this.dirtyText
                          .replace(/&(?![a-zA-Z0-9#]{1,20};)/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;');
  }

  manageSubTypes(event: any, subType: any) {

    if (event) {
      this.selectedSubTypes.push(parseInt(subType,10));
    } else {
      this.selectedSubTypes = this.selectedSubTypes.filter(el => {
        return el != subType;
      });
    }

  }
}
