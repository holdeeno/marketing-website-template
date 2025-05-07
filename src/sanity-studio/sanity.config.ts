import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/index';

export default defineConfig({
  name: 'default',
  title: 'Marketing Website CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemas,
  },
  
  basePath: '/studio',
  
  // Add CORS origins for local development
  cors: {
    // This is required for the Studio to function properly
    // See: https://github.com/sanity-io/next-sanity/issues/344
    allowCredentials: true,
    allowOrigins: [
      'http://localhost:3000',
      'http://localhost:3333',
      'http://127.0.0.1:3000',
    ],
  },
  useCdn: false,
});
