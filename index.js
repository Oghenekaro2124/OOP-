class Product {
    constructor(id, name , price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ShoppingCartItems{
    constructor(items) {
        this.items = items;
    }

    addCartItems(items) {
        return this.items.push(items);
    }

    incrementCartItemQuantity(id) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex >= 0) {
            this.items[itemIndex].quantity += 1;
            return this.items;
        }

        return "item does not exist";
    }

    decreaseCartItemQuantity(id) {
        const itemIndex = this.items.findIndex(item => item.id === id); 
        if (itemIndex >= 0) {
            this.items[itemIndex].quantity -= 1;
            return this.items;
        }

        return "item does not exist";
    }

    deleteCartItem(id) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
            return this.items;
        }

        return "Item does not exist";
    }

     
    calculateTotalPrice() {
        let totalPrice = 0;
        for (let item of this.items) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;

    }
}

  const product1 = new Product("p1", "Chips", 4000, 0);
  const product2 = new Product("p2", "Biscuits", 2000, 0);
  const product3 = new Product("p3", "Soda", 3000, 0);

  const shopingCartItems = new ShoppingCartItems([product1, product2, product3]);

  console.log(shopingCartItems.incrementCartItemQuantity("p1"));