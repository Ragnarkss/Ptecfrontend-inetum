Feature: Login en Sauce Demo

  Scenario: Login exitoso con usuario estándar
    Given el usuario navega a Sauce Demo
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver la página de productos

  Scenario: Login fallido con usuario bloqueado
    Given el usuario navega a Sauce Demo
    When inicia sesión con usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error