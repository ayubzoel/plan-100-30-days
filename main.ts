import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Day 1: crawl Shopify stores, test each checkout, list ones that error. Email owners a screenshot + $79 fix, pay only if fixed. 100 emails/day, close 2/day = $158/day. Edge: only an agent can test thousands of checkouts daily; a broken checkout bleeds sales, so owners pay fast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), plan, "utf8");
