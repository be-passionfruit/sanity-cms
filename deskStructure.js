import S from "@sanity/desk-tool/structure-builder";
import {product} from './desk/product';
import {routine} from './desk/routine';
import {category} from './desk/category';
import {bundles} from './desk/bundles';
import {blog} from './desk/blog';

const DOCUMENT_TYPES_IN_STRUCTURE = [
  'bundles',
  'product',
  'routine',
  'category',
  'blog',
]

export default () => {
  return (
    S.list()
      .title('Content')
      .items([
        product,
        category,
        S.divider(),
        bundles,
        routine,
        S.divider(),
        blog,
        // ...S.documentTypeListItems().filter(listItem => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()))
      ])
  )
}