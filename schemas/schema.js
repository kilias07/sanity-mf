// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import products from "./products";
import collectionOfProducts from "./collectionOfProducts";
import blogPost from "./blogPost";
import certificateMainPage from "./certificateMainPage";
import shopsLogosMainPage from "./shopsLogosMainPage";
import heroSection from "./heroSection";
import geoPoints from "./geoPoints";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        products,
        collectionOfProducts,
        blogPost,
        certificateMainPage,
        heroSection,
        shopsLogosMainPage,
        geoPoints
    ]),
})
