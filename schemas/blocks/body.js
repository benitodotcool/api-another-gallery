// import React from 'react'

export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
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
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal'
          },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal'
          }
        ],
        decorators: [
          {
            title: 'Italic',
            value: 'em'
          },
          {
            title: 'Strong',
            value: 'strong'
          }
        ]
      },
      // Regular styles
      // styles: [
      //   {
      //     blockEditor: {
      //       render: ({ children }) => (
      //         <div style={{ fontSize: '1.25rem', lineHeight: 1.25 }}>{children}</div>
      //       )
      //     },
      //     title: 'Heading',
      //     value: 'h2'
      //   }
      // ],
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        // {title: 'H2', value: 'h2'},
        // {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      // Paragraphs
      type: 'block'
    }
  ]
}
