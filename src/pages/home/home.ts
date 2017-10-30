import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	bar = { "test": 'bar' };

	constructor(public navCtrl: NavController, private translateService: TranslateService) {

        /*translateService.setTranslation('en', {
            IN_APP : 'Internal app translation'
        });

        translateService.setTranslation('hr', {
            IN_APP : 'Prijevod unutar aplikacije'
        });*/
	}

	segmentChanged(event) {
		this.translateService.use(event._value);
	}
}