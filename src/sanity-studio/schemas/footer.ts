export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) => Rule.required(),
            }
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'copyrightText',
      media: 'logo'
    },
    prepare({ title, media }: { title: string, media: any }) {
      return {
        title: 'Footer',
        subtitle: title,
        media
      }
    }
  }
}
