import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service shoppingCart;

  @action
  addToCart() {
    const { name, colors, color, price } = this.args;
    this.shoppingCart.addItem({
      name,
      color,
      price: price.current,
      image: colors.find((info) => info.color === color).image,
    });
  }
}
