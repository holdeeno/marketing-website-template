import { SchemaTypeDefinition } from 'sanity';

// Import schemas with explicit type assertions
const hero = require('./hero').default as SchemaTypeDefinition;
const features = require('./features').default as SchemaTypeDefinition;
const feature = require('./feature').default as SchemaTypeDefinition;
const cta = require('./cta').default as SchemaTypeDefinition;
const contact = require('./contact').default as SchemaTypeDefinition;
const header = require('./header').default as SchemaTypeDefinition;
const footer = require('./footer').default as SchemaTypeDefinition;

const schemas: SchemaTypeDefinition[] = [
  hero,
  features,
  feature,
  cta,
  contact,
  header,
  footer,
];

export default schemas;
