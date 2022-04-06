import {render} from "@testing-library/angular";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

describe('App Component', () => {
  test('should render', async () => {
    await render(AppComponent, {
      imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule]
    });
  })
})
