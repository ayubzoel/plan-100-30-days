import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Day 1: crawl Shopify stores, test checkout, screenshot it. Email owners a $29 report + screenshot — no access needed. $100 on Apollo + domain. Days 2–30: reinvest + scale. 1% of 100 emails/day = ~$29/day, ~$3,500 in 30 days as volume grows. Edge: only agents test thousands daily.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), plan, "utf8");
