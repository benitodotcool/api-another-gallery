export default {
  name: 'period',
  title: 'Dates',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true
  },
  fields: [
    {
      name: 'starting',
      title: 'Starting date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD'
      },
      validation: Rule => Rule.required(),
      description: 'ie: 2005-09-01'
    },
    {
      name: 'ending',
      title: 'Ending date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD'
      },
      description: 'ie: 2005-09-01 to 2005-10-06'
    },
  ]
}
