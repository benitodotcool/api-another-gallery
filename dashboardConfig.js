export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Artists (last updated)',
        order: '_updatedAt desc',
        types: ['artist']
      },
      layout: {
        width: 'small',
        height: 'full'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Works (last updated)',
        order: '_updatedAt desc',
        types: ['work']
      },
      layout: {
        width: 'small',
        height: 'full'
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Shows (ast updated)',
        order: '_updatedAt desc',
        types: ['show']
      },
      layout: {
        width: 'small',
        height: 'full'
      }
    },
  ]
}