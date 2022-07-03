import { UIText } from 'components/UI'
import { FC } from 'react'
import sass from './Footer.module.sass'

const Footer: FC = () => {
  return (
    <footer className={sass['footer']}>
      <UIText size={14}>
        &copy;2022 Roxman Kirill. You free to use it as you wish :)
      </UIText>
      <div className={sass['footer__social']}>
      </div>
    </footer>
  )
}

export default Footer
