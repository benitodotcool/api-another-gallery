import { CalendarIcon } from '@sanity/icons'
import React from 'react'

export default {
  title: 'Show',
  name: 'annotationShow',
  type: 'object',
  blockEditor: {
    icon: () => <CalendarIcon />,
    render: ({ children }) => (
      <>
        <CalendarIcon
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
    // Show
    {
      name: 'show',
      title: 'Show',
      type: 'reference',
      to: [{ type: 'show' }],
      validation: Rule => Rule.required()
    }
  ]
}
