import { Component, OnInit } from '@angular/core';
import { LanguageModel } from 'src/app/models/language-model';
import { TranslateModel } from 'src/app/models/translate-model';
import { TrasnlateService } from 'src/app/services/trasnlate.service';

@Component({
  selector: 'app-criolo-translate',
  templateUrl: './criolo-translate.component.html',
  styleUrls: ['./criolo-translate.component.scss']
})
export class CrioloTranslateComponent implements OnInit {
  translateModel: TranslateModel;
  constructor(private trasnlateService: TrasnlateService) { }

  ngOnInit() {
    this.translateModel = new TranslateModel();
    this.translateModel.languages = new Array();

    let languageModel = new LanguageModel();
    languageModel.description = 'Criolo';
    languageModel.id = 'CV';
    this.translateModel.languages[0] = languageModel;

    languageModel = new LanguageModel();
    languageModel.description = 'Português';
    languageModel.id = 'PT';

    this.translateModel.languages[1] = languageModel;
  }

  translate() {
    this.trasnlateService.translate(this.translateModel).subscribe();
  }

}
