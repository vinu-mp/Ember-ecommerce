import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  name;
  price;
  image;
  color;

  constructor(item) {
    this.name = item.name;
    this.price = item.price;
    this.image = item.image;
    this.color = item.color;
    this.count = item.count;
  }
}

export default class ShoppingCartService extends Service {
  @tracked items = [];

  addItem(item) {
    // const existing = this.items.findIndex(
    //   (prod) => prod.name === item.name && prod.color === item.color
    // );
    const existing = this.items.find(
      ({ name, color }) => name === item.name && color === item.color
    );
    if (existing) {
      existing.count += 1;
    } else {
      this.items = [...this.items, new Item({ ...item, count: 1 })];
    }
  }
}
