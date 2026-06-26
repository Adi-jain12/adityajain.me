import type { Metadata } from "next";

export function canonicalMetadata(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: path,
    },
  };
}
