// cast number to unsigned 32-bit int
export const castUint32 = (n: number) => {
  return new Uint32Array([n])[0];
};

const _mtrand = function* (seed: number) {
  // parameters c++ ref
  // http://www.cplusplus.com/reference/random/mt19937/
  const W = 32;
  const N = 624;
  const M = 397;
  const F = 1812433253;
  const U = 11;
  const D = 0xffffffff;
  const S = 7;
  const B = 0x9d2c5680;
  const T = 15;
  const C = 0xefc60000;
  const L = 18;
  const R = 31;
  const HI = (1 << R);
  const LO = (1 << R) - 1;
  const MASK = 0x9908b0df;

  let index: number;
  const mt = [];

  // init
  mt[0] = castUint32(seed);
  for (index = 1; index < N; index++) {
    let x: any = mt[index - 1] ^ (mt[index - 1] >>> 30);
    mt[index] = castUint32(
      ((((x & 0xffff0000) >>> 16) * F) << 16) +
        ((((x & 0x0000ffff) >>> 0) * F) << 0) + index,
    );
  }

  // main
  do {
    for (index = 0; index < N; index++) {
      const x = castUint32((mt[index] & HI) + (mt[(index + 1) % N] & LO));
      mt[index] = (mt[(index + M) % N] ^ x >>> 1);
      mt[index] = castUint32(x & 1 ? mt[index] ^ MASK : mt[index]);
    }

    for (index = 0; index < N; index++) {
      let y = mt[index];
      y ^= (y >>> U);
      y ^= (y << S) & B;
      y ^= (y << T) & C;
      y ^= (y >>> L);
      yield castUint32(y);
    }
  } while (true);
};

export const mtrand = (seed: any) => {
  return _mtrand(seed);
};

// ToDo add a couple of methods
