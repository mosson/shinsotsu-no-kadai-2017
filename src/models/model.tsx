class Model {
  readonly srces: string[];
  private _index: number;

  constructor(srces: string[]) {
    this.srces = srces;
    this._index = 0;
  }

  update(index: number): number {
    this._index = index;
    return this._index;
  }

  next(): number {
    ++this._index;
    if (this._index >= this.srces.length) this._index = 0;
    return this._index;
  }

  back(): number {
    --this._index;
    if (this._index < 0) this._index = this.srces.length - 1;
    return this._index;
  }

  get index(): number {
    return this._index;
  }
}

export default Model;
