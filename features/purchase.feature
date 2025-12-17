Feature: Compra de productos

  Scenario: Compra completa de un producto
    Given el usuario navega a Sauce Demo
    And inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    When agrega un producto al carrito
    And visualiza el carrito
    And completa el proceso de compra
    Then debería ver la confirmación de la compra