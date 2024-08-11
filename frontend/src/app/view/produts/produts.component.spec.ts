import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsComponent } from './produts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProdutsComponent', () => {
  let component: ProdutsComponent;
  let fixture: ComponentFixture<ProdutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProdutsComponent 
      ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
