export default {
  name: 'seo.page',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: { field: 'title' },
      validation: Rule => Rule.max(50).warning('Longer titles may be truncated by search engines').required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: Rule =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines').required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule =>
        Rule.required()
    }
  ]
}