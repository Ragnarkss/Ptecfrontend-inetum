import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("el usuario navega a Sauce Demo", async function () {
  await this.loginPage.navigate();
});

When(
  "inicia sesión con usuario {string} y contraseña {string}",
  async function (user, pass) {
    await this.loginPage.login(user, pass);
  }
);

Then("debería ver la página de productos", async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then("debería ver un mensaje de error", async function () {
  const error = await this.loginPage.getErrorMessage();
  expect(error).toContain("locked out");
});