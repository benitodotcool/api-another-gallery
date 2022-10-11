// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons types
import Home from './singletons/home'
import Settings from './singletons/settings'

// Document types
import Work from './documents/work'
import Artist from './documents/artist'
import Show from './documents/show'
import Gallery from './documents/gallery'

// Object types
import seoPage from './objects/seo/page'
import editorialMain from './objects/editorial/main';
import period from './objects/period'

// Anotation types
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationWork from './annotations/work'
import annotationShow from './annotations/show'
import annotationArtist from './annotations/artist'

// Block content
import body from './blocks/body'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Singletons types
    Home,
    Settings,
    // Document types
    Artist,
    Show,
    Gallery,
    Work,
    // Object types
    seoPage,
    editorialMain,
    period,
    // Anotation types
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationWork,
    annotationShow,
    annotationArtist,
    // Block content
    body
  ]),
})
