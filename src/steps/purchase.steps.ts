import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("agrega un producto al carrito", async function () {
  await this.productsPage.addFirstProductToCart();
});

When("visualiza el carrito", async function () {
  await this.productsPage.goToCart();
});

When("completa el proceso de compra", async function () {
  await this.cartPage.checkout();
  await this.checkoutPage.completeCheckout();
});

Then("debería ver la confirmación de la compra", async function () {
  const msg = await this.checkoutPage.confirmationMessage();
  expect(msg.toLowerCase()).toContain("thank you for your order");
});