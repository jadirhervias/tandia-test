import { Item } from "./item";

export class Sulfuras extends Item {
  constructor(quality: number, sellIn: number) {
    super(quality, sellIn);
  }

  public tick(): void {
  }
}