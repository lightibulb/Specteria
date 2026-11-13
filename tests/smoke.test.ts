import { describe, it, expect } from "vitest";
import { SITE } from "../src/config/site";

describe("site config", () => {
  it("uses the Specteria brand name", () => {
    expect(SITE.name).toBe("Specteria");
  });

  it("provides a non-empty title and description", () => {
    expect(SITE.title.length).toBeGreaterThan(0);
    expect(SITE.description.length).toBeGreaterThan(0);
  });

  it("has a valid https URL", () => {
    expect(SITE.url).toMatch(/^https?:\/\//);
  });
});
