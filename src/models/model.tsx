import { EventEmitter2 } from 'eventemitter2';

// TimerClearer is setTimeout clearer type.
type TimerClearer = number;

class Model extends EventEmitter2 {
  readonly srces: string[];
  private _index: number;
  private _timer: TimerClearer;
  private _automode: boolean; // automode indicates activating slide show.
  private _changedAt: number; // index changed at duration

  intervalDuration: number; // intervalDuration is next tick duration in automode.

  constructor(srces: string[], conf?: EventEmitter2Configuration) {
    super(conf);

    this.intervalDuration = 5000;
    this._automode = true;
    this.srces = srces;
    this.setIndex(0);
  }

  update(index: number): number {
    this.clearTimer();
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

  toggleAuto() {
    this._automode = !this._automode;
    
    if(this._automode) {
      this.setTimer();
    } else {
      this.clearTimer();
    }

    this.emit('updated');
  }

  private tick(): void {
    if (!this._automode) return;
    this.next();
  }

  private setIndex(v: number): void {
    this._index = v;
    this.setTimer();
    this.emit('updated');
  }

  private setTimer(): void {
    this._timer = this.setTimeout(this.tick.bind(this), this.intervalDuration);
    this._changedAt = new Date().getTime();
  }

  private clearTimer(): void {
    clearTimeout(this._timer);
  }

  private setTimeout(handler: any, timeout?: any, ...args: any[]): TimerClearer {
    return setTimeout(handler, timeout, ...args) as TimerClearer;
  }

  get index(): number {
    return this._index;
  }

  get automode(): boolean {
    return this._automode;
  }

  get changedAt(): number {
    return this._changedAt;
  }
}

export default Model;
