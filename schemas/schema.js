// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Product from './Product'
import ProductImage from './types/ProductImage'
import Review from './Review'
import Question from './Question'
import Social from './Social'
import Routine from './Routine'
import Category from './Category'
import Concern from './Concern'
import Bundles from './Bundles'
import Blog from './Blog'
import Influencer from './Influencer'
import Discount from './Discount'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Product,
    Routine,
    Category,
    Concern,
    Bundles,
    Review, //Hide Review in List
    Question, //Hide Review in List 
    Social, //Hide Review in List 
    Blog,
    Influencer,
    Discount,

    /* Custom types here */
    ProductImage,
  ]),
})
