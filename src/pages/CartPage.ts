export class CartPage {
  constructor(private page: any) {}

  async checkout() {
    await this.page.click("#checkout");
  }
}