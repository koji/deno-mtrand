# 🦕 deno-mtrand

[Deno](https://deno.land) module starter repository.

## Usage

```typescript
import { mtrand } from "https://deno.land/x/mtrand/mod.ts";

const rand = mtrand(0);
for(let i=0; i<10; i++) {
  console.log(`${i} - ${rand.next().value}`)
}
```

### castUint32
cast number to Uint32
parameter number

### mtrand
generate number with mt19937 method
parameter number

## Test

```bash
# unit tests
deno ./test.ts
```

## Format code

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)