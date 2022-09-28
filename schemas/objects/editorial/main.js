export default {
  name: 'editorial.main',
  title: 'Main',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true
  },
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'text',
      rows: 2,
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'text',
      rows: 2,
    }
  ]
}
