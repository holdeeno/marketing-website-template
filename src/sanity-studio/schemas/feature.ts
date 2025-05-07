export default {
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (SVG code)',
      type: 'text',
      description: 'SVG markup for the icon',
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    }
  }
}
