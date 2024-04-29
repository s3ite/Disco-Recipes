import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCarousselComponent } from './recipe-caroussel.component';

describe('RecipeCarousselComponent', () => {
  let component: RecipeCarousselComponent;
  let fixture: ComponentFixture<RecipeCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCarousselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
