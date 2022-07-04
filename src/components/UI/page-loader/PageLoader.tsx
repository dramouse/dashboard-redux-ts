import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import UIIcon from '../icon/Icon'
import sass from './PageLoader.module.sass'

const PageLoader = () => {
  return (
    <div className={sass['page-loader']}>
      <UIIcon icon={faSpinner} spin active />
    </div>
  )
}

export default PageLoader
