import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;

  @tracked isZoomed = false;

  get ProductImage() {
    return this.model.colors.find((item) => item.color === this.color).image;
  }

  @action
  toggleZoomHandler() {
    this.isZoomed = !this.isZoomed;
  }

  @action
  onChangeHandler(newColor) {
    this.color = newColor;
  }
}
