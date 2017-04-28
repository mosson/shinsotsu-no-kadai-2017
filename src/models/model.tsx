import { EventEmitter2 } from 'eventemitter2';

class Model extends EventEmitter2 {
  readonly srces: string[];
  private _index: number;

  constructor(srces: string[], conf?: EventEmitter2Configuration) {
    super(conf);

    this.srces = srces;
    this.setIndex(0);
  }

  update(index: number): number {
    this.setIndex(index);
    return this._index;
  }

  next(): number {
    if (this._index + 1 >= this.srces.length) {
      this.update(0);
    } else {
      this.update(this._index + 1);
    }
    return this._index;
  }

  back(): number {
    if (this._index - 1 < 0) {
      this.update(this.srces.length - 1)
    } else {
      this.update(this._index - 1);
    }
    return this._index;
  }

  private setIndex(v: number): void {
    this._index = v;
    this.emit('updated');
  }

  get index(): number {
    return this._index;
  }
}

export default Model;
