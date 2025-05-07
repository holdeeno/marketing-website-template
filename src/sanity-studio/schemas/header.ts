export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title/Logo Text',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'link',
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo'
    },
    prepare({ title, media }: { title: string, media: any }) {
      return {
        title: title || 'Header',
        media
      }
    }
  }
}
