import { Brie } from "./brie";
import { Conjured } from "./conjured";
import { Normal } from "./normal";
import { Sulfuras } from "./sulfuras";
import { BackstagePasses } from "./backstage-passes";
import { Item } from "./item";

export class GildedRose {
    private static DEFAULT_CLASS = Normal;
    private static SPECIALIZED_CLASSES: { [key: string]: new (quality: number, sellIn: number) => Item } = {
      'normal': Normal,
      'Aged Brie': Brie,
      'Sulfuras, Hand of Ragnaros': Sulfuras,
      'Backstage passes to a TAFKAL80ETC concert': BackstagePasses,
      'Conjured Mana Cake': Conjured,
    };

    public static of(name: string, quality: number, sellIn: number): Item {
      const selectedClass = this.SPECIALIZED_CLASSES[name] || this.DEFAULT_CLASS;
      return new selectedClass(quality, sellIn);
    }
}
