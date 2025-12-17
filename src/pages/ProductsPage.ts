export class ProductsPage {
  constructor(private page: any) {}

  async addFirstProductToCart() {
    await this.page.click(".inventory_item button");
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
}