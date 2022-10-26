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
        dateFormat: 'DD-MM-YYYY'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'ending',
      title: 'Ending date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      },
      validation: Rule => Rule.required()
    }
  ]
}
