import { expect, test } from "bun:test";
import { accountQuotaFromReport } from "../src/provider-workspace/report";

test("provider quota projection preserves bounded exact Antigravity model IDs", () => {
  expect(accountQuotaFromReport({
    updatedAt: 123,
    quota: {
      updatedAt: 123,
      customWindows: [
        { label: "gemini-3.8-flash-high", modelId: "gemini-3.8-flash-high", percent: 24 },
        { label: "legacy", modelId: "x".repeat(129), percent: 12 },
      ],
    },
  })?.customWindows).toEqual([
    { label: "gemini-3.8-flash-high", modelId: "gemini-3.8-flash-high", percent: 24 },
    { label: "legacy", percent: 12 },
  ]);
});
