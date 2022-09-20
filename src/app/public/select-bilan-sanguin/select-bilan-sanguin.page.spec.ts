import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectBilanSanguinPage } from './select-bilan-sanguin.page';

describe('SelectBilanSanguinPage', () => {
  let component: SelectBilanSanguinPage;
  let fixture: ComponentFixture<SelectBilanSanguinPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBilanSanguinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectBilanSanguinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
