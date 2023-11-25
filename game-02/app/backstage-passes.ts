import { Item } from "./item";

export class BackstagePasses extends Item {
  constructor(quality: number, sellIn: number) {
    super(quality, sellIn);
  }

  private lessThan10DaysToSell(): boolean {
    return this.sellIn < 10;
  }

  private lessThan5DaysToSell(): boolean {
    return this.sellIn < 5;
  }

  public tick(): void {
    this.decreaseSellInByOne();

    if (this.saleDayHasAlreadyPassed()) {
      this.quality = 0;
      return;
    }

    this.increaseQualityByOne();

    if (this.lessThan10DaysToSell()) {
      this.increaseQualityByOne();
    }

    if (this.lessThan5DaysToSell()) {
      this.increaseQualityByOne();
    }
  }
}
