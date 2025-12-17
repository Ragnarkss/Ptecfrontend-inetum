export class CheckoutPage {
  constructor(private page: any) {}

  async completeCheckout() {
    await this.page.fill("#first-name", "Yair");
    await this.page.fill("#last-name", "Lozada");
    await this.page.fill("#postal-code", "20001");
    await this.page.click("#continue");
    await this.page.click("#finish");
  }

  async confirmationMessage() {
    return this.page.locator(".complete-header").innerText();
  }
}