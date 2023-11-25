import { Item } from "./item";

export class Conjured extends Item {
  constructor(quality: number, sellIn: number) {
    super(quality, sellIn);
  }

  public tick(): void {
    this.decreaseSellInByOne();
    this.decreaseQualityBy(2);
  }
}
