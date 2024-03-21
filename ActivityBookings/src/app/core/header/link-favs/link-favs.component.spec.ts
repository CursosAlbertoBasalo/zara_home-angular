import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFavsComponent } from './link-favs.component';

describe('LinkFavsComponent', () => {
  let component: LinkFavsComponent;
  let fixture: ComponentFixture<LinkFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
