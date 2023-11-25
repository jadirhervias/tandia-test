export abstract class Item {
  public quality: number;
  public sellIn: number;
  private readonly LOWEST_QUALITY_POSSIBLE_VALUE: number = 0;
  private readonly HIGHEST_QUALITY_POSSIBLE_VALUE: number = 50;
  abstract tick(): void;

  constructor(quality: number, sellIn: number) {
    this.quality = quality;
    this.sellIn = sellIn;
  }

  protected hasReachedLowestQualityValue(): boolean {
    return this.quality === this.LOWEST_QUALITY_POSSIBLE_VALUE;
  }

  protected hasReachedHighestQualityValue(): boolean {
    return this.quality >= this.HIGHEST_QUALITY_POSSIBLE_VALUE;
  }

  protected saleDayHasAlreadyPassed(): boolean {
    return this.sellIn < 0;
  }

  protected saleDayHasAlreadyPassedOrMustBeSoldToday(): boolean {
    return this.sellIn <= 0;
  }

  protected decreaseSellInByOne(): void {
    this.sellIn -= 1;
  }

  protected increaseQualityBy(value: number): void {
    if (this.hasReachedHighestQualityValue()) {
      return;
    }

    this.quality += value;
  }

  protected increaseQualityByOne(): void {
    this.increaseQualityBy(1);
  }

  protected decreaseQualityBy(value: number): void {
    if (this.hasReachedLowestQualityValue()) {
      return;
    }

    if (this.saleDayHasAlreadyPassedOrMustBeSoldToday()) {
      this.quality -= value * 2;
      return;
    }

    this.quality -= value;
  }

  protected decreaseQualityByOne(): void {
    this.decreaseQualityBy(1);
  }
}
