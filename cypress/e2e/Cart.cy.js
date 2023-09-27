describe("Cart_Suite", () => {
  it.only("Testcase_3 - Verify subtotal, proce for each product and the Total", () => {
    let actualTotal = 0;
    let shopProducts = new Map([
      ["Stuffed Frog", 2],
      ["Fluffy Bunny", 5],
      ["Valentine Bear", 3],
    ]);

    cy.visit("/");
    cy.get("#nav-shop >a").click();

    for (let [key, value] of shopProducts) {
      cy.get(`h4:contains('${key}')`).parent().as("divObject");
      cy.get("@divObject")
        .find("span")
        .then(($y) => {
          cy.wrap($y.text()).as(`${key.replace(" ", "")}Price`);
        });
      for (let i = 0; i < value; i++) {
        cy.get("@divObject").find("a").click();
      }
    }

    // navigate to the cart page
    cy.get("a[href='#/cart']").click();

    // traverse the
    cy.get(".cart-item")
      .its("length")
      .then((items) => {
        cy.log("number of items in cart " + items);
        for (let item = 1; item <= items; item++) {
          cy.get(`.cart-item:nth-child(${item}) td:first()`).then(($i) => {
            let itemText = $i.text().trim();

            // validate the price of the item selected
            cy.get(`.cart-item:nth-child(${item}) td:nth-child(2)`).then(
              ($element) => {
                cy.get(`@${itemText.replaceAll(" ", "")}Price`).then(
                  ($price) => {
                    expect($element.text()).be.eq($price);
                  }
                );
              }
            );

            // validate the quantity selected
            cy.get(`.cart-item:nth-child(${item}) input`)
              .invoke("val")
              .then((actualQuantity) => {
                expect(actualQuantity).be.eq(
                  shopProducts.get(itemText).toString()
                );
              });

            // validate the subtotals of each item
            cy.get(`.cart-item:nth-child(${item}) td:nth-child(4)`).then(
              ($element) => {
                cy.get(`@${itemText.replaceAll(" ", "")}Price`).then(
                  ($price) => {
                    let itemPrice = Number($price.slice(1));
                    expect($element.text()).be.eq(
                      `$${itemPrice * shopProducts.get(itemText)}`
                    );
                  }
                );
              }
            );
          });
        }
      });

    // validate the total price
    cy.wrap(0).as("total");
    for (let [key, value] of shopProducts) {
      cy.get(`@${key.replaceAll(" ", "")}Price`).then(($price) => {
        cy.log($price.slice(1));
        cy.get("@total").then((val) => {
          cy.wrap(val + $price.slice(1) * value).as("total");
        });
      });
    }
    cy.get("@total").then(($expectedTotal) => {
      cy.get(".total").then(($actualTotal) => {
        expect($actualTotal.text().split(" ")[1]).to.eq(
          $expectedTotal.toString()
        );
      });
    });
  });
});
