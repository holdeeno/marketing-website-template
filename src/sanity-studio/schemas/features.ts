export default {
  name: 'features',
  title: 'Features Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Section Description',
      type: 'text',
    },
    {
      name: 'featureItems',
      title: 'Feature Items',
      type: 'array',
      of: [{ type: 'feature' }],
      validation: (Rule: any) => Rule.required().min(1),
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    }
  }
}
