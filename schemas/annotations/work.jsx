import { ImageIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'Work',
  name: 'annotationWork',
  type: 'object',
  blockEditor: {
    icon: () => <ImageIcon />,
    render: ({ children }) => (
      <>
        <ImageIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em'
          }}
        />
        {children}
      </>
    )
  },
  fields: [
    {
      name: 'work',
      title: 'Work',
      type: 'reference',
      to: [{ type: 'work' }],
      validation: Rule => Rule.required()
    }
  ]
}