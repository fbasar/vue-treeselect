import { library } from '@fortawesome/fontawesome-svg-core'
//import Icons from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Treeselect from './components/Treeselect'
import treeselectMixin from './mixins/treeselectMixin'
import './style.less'

library.add(fas)

export default Treeselect
export { Treeselect, treeselectMixin }
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
} from './constants'

export const VERSION = PKG_VERSION
