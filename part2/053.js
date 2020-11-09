class Product {
  static build(name, price) {
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }

  static getTaxPrice(product) {
    return product.price * 1.1;
  }

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class DesposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

const gum = Product.build("껌", 1000);
console.log(gum);

const clothes = new DesposableProduct(1, "옷", 2000);
const taxPrice = DesposableProduct.getTaxPrice(clothes);
console.log(taxPrice);
