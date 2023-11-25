import { Item } from "./item";

export class Brie extends Item {
  constructor(quality: number, sellIn: number) {
    super(quality, sellIn);
  }

  public tick(): void {
    this.decreaseSellInByOne();
    this.increaseQualityByOne();

    if (
      !this.hasReachedHighestQualityValue()
      && this.saleDayHasAlreadyPassedOrMustBeSoldToday()
    ) {
      this.increaseQualityByOne();
    }
  }
}
