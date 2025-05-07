/**
 * This file contains the query functions for Sanity
 */

// Query for the homepage content
export const homePageQuery = `{
  "hero": *[_type == "hero"][0],
  "features": *[_type == "features"][0],
  "cta": *[_type == "cta"][0],
  "contact": *[_type == "contact"][0],
  "footer": *[_type == "footer"][0],
  "header": *[_type == "header"][0]
}`;

// Query for a specific section by type
export const getSectionByTypeQuery = (type: string) => `*[_type == "${type}"][0]`;
