import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetloginPage } from './resetlogin.page';

describe('ResetloginPage', () => {
  let component: ResetloginPage;
  let fixture: ComponentFixture<ResetloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
