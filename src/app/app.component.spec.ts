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
      await userEvent.type(screen.getByLabelText(/Email/), 'invalidEmail');
      fireEvent.blur(screen.getByLabelText(/Email/));

      // THEN
      expect(screen.queryByText('Email invalide')).toBeInTheDocument();
    });

    test('should not display invalid error message when email is valid', async () => {
      // GIVEN
      await renderComponent();

      // WHEN
      await userEvent.type(screen.getByLabelText(/Email/), 'email.valide@test.fr');
      fireEvent.blur(screen.getByLabelText(/Email/));

      // THEN
      expect(screen.queryByText('Email invalide')).not.toBeInTheDocument();
    });
  });

  describe('Global', () => {
    test('should enable button when everything is valid', async () => {
      // GIVEN
      await renderComponent();

      // WHEN
      await userEvent.type(screen.getByLabelText(/Email/), 'email.valide@test.fr');
      await userEvent.type(screen.getByLabelText(/Mot de passe/), 'email.valide@test.fr');
      await userEvent.type(screen.getByLabelText(/Confirmer mot de passe/), 'email.valide@test.fr');
      await userEvent.click(screen.getByText('Accept conditions'));

      // THEN
      expect(screen.getByRole('button', {name: 'Enregistrer'})).toBeEnabled();
    })
  });

  async function renderComponent() {
    await render(AppComponent, {
      imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule]
    });
  }
});
