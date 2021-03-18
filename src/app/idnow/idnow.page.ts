import { Component, OnInit } from '@angular/core';

declare var idnow;

@Component({
  selector: 'app-idnow',
  templateUrl: './idnow.page.html',
  styleUrls: ['./idnow.page.css'],
})
export class IdnowPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  startVideoIdent() {
    idnow.setCompanyId('COMPANY_ID');
    idnow.setShowVideoOverviewCheck(true);
    idnow.setShowErrorSuccessScreen(true);
    idnow.startIdNowSdk('TST-QAFWM');
  }
}
