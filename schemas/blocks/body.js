export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Emphasis', value: 'h3'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em'
          }
          // {
          //   title: 'Strong',
          //   value: 'strong'
          // }
        ],
        annotations: [
          // Work
          {
            name: 'annotationWork',
            type: 'annotationWork'
          },
          // Show
          {
            name: 'annotationShow',
            type: 'annotationShow'
          },
          // Artist
          {
            name: 'annotationArtist',
            type: 'annotationArtist'
          },
          // Email
          {
            name: 'annotationLinkEmail',
            type: 'annotationLinkEmail'
          },
          // Internal link
          // {
          //   name: 'annotationLinkInternal',
          //   type: 'annotationLinkInternal'
          // },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal'
          }
        ]
      },
      // Paragraphs
      type: 'block'
    }
  ]
}
