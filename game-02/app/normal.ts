import { Item } from "./item";

export class Normal extends Item {
  constructor(quality: number, sellIn: number) {
    super(quality, sellIn);
  }

  public tick(): void {
    this.decreaseSellInByOne();
    this.decreaseQualityByOne();
  }
}
