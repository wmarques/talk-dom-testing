import {fireEvent, render, screen} from "@testing-library/angular";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe('App Component', () => {
  test('should render', async () => {
    await renderComponent();
  });


  describe('Email', () => {
    test('should display invalid error message when email is invalid', async () => {
      // GIVEN
      await renderComponent();


      // WHEN

      // THEN
    });

    test('should not display invalid error message when email is valid', async () => {
      // GIVEN
      await renderComponent();

      // WHEN

      // THEN
    });
  });

  describe('Global', () => {
    test('should enable button when everything is valid', async () => {
      // GIVEN
      await renderComponent();

      // WHEN

      // THEN
    })
  });

  async function renderComponent() {
    await render(AppComponent, {
      imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule]
    });
  }
});
