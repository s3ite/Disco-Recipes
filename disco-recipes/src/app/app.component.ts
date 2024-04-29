import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesService } from './recipes.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Disco Recipes';
  subtitle = 'Eveillez vos papilles avec des recettes de cuisine du monde entier !';

  constructor(private recipesService: RecipesService) {}
}
