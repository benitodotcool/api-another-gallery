import React from 'react'

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
      readOnly: true,
      description: (
        <>
          If empty:
          <ul style={{
            paddingInlineStart: '12px',
            marginBlockStart: 0,
            marginBlockEnd: 0
          }}>
            <li>
              <code>ARTIST:</code><br/>
              ArtistName • ANOTHER GALLERY
            </li>
            <li>
              <code>WORK:</code><br/>
              WorkTitle • ANOTHER GALLERY
            </li>
            <li>
              <code>SHOW:</code><br/>
              ShowTitle • ANOTHER GALLERY City
            </li>
          </ul>
        </>
      ),
      validation: Rule => Rule.max(50).warning('Longer titles may be truncated by search engines').required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      readOnly: true,
      description: (
        <>
          If empty:
          <ul style={{
            paddingInlineStart: '12px',
            marginBlockStart: 0,
            marginBlockEnd: 0
          }}>
            <li>
              <code>ARTIST:</code><br/>
              ArtistName (b. 1990) represented by ANOTHER GALLERY.
            </li>
            <li>
              <code>WORK:</code><br/>
              WorkTitle by ArtistName represented by ANOTHER GALLERY.<br/>
              WorkYear, WorkMedium, WorkDimensions
            </li>
            <li>
              <code>SHOW:</code><br/>
              ShowTitle by ANOTHER GALLERY City.<br/>
              From StartingDate to Ending date.<br/>
              First 3 ArtistName etc.<br/>
            </li>
          </ul>
        </>
      ),
      validation: Rule =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines').required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      readOnly: true,
      description: (
        <>
          If empty:
          <ul style={{
            paddingInlineStart: '12px',
            marginBlockStart: 0,
            marginBlockEnd: 0
          }}>
            <li>
              <code>ARTIST:</code><br/>
              First image of the first Work(s)
            </li>
            <li>
              <code>WORK:</code><br/>
              First image of the Images(s)
            </li>
            <li>
              <code>SHOW:</code><br/>
              First image of the Images(s)
            </li>
          </ul>
          The image will be croped to square format
        </>
      ),
      // validation: Rule => Rule.required()
    }
  ]
}
