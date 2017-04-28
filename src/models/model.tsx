class Model {
  readonly srces: string[];
  index: number;

  constructor(srces: string[]) {
    this.srces = srces;
    this.index = 0;
  }

  update(index: number): number {
    this.index = index;
    return this.index;
  }

  next(): number {
    ++this.index;
    if (this.index >= this.srces.length) this.index = 0;
    return this.index;
  }

  back(): number {
    --this.index;
    if (this.index < 0) this.index = this.srces.length - 1;
    return this.index;
  }
}

export default Model;
