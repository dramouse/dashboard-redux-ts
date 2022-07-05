import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { UIText } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import { FC } from 'react'
import { useRefresher } from 'utils'
import sass from './Footer.module.sass'

const Footer: FC = () => {
  return (
    <footer className={sass['footer']}>
      <UIText size={14}>
        &copy;2022 Roxman Kirill. You free to use it as you wish :)
      </UIText>
    </footer>
  )
}

export default Footer
