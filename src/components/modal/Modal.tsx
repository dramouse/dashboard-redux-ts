import { faXmark } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { UIButton, UITitle } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { setModalContent, setModalVisible } from 'store/modal/modal.slice'
import { useThemeClassName } from 'utils'
import sass from './Modal.module.sass'

const Modal: FC = () => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const showModal = useAppSelector((state) => state.modalReducer.show)
  const content = useAppSelector((state) => state.modalReducer.content)
  const dispatch = useAppDispatch()

  const closeModal = () => {
    dispatch(setModalVisible(false))
  }

  return (
    <div className={classNames(sass['modal'], showModal && sass['_show'])}>
      <div className={classNames(sass['modal__window'], themeClasses)}>
        <div className={sass['modal__header']}>
          <UITitle>Modal</UITitle>
          <UIButton onClick={closeModal} grey paddingX={20}>
            <UIIcon icon={faXmark} active={false} />
          </UIButton>
        </div>
        <div className={sass['modal__content']}>{content}</div>
        <div className={sass['modal__buttons']}>
          <UIButton grey paddingX={30}>
            Cancel
          </UIButton>
          <UIButton paddingX={30}>Apply</UIButton>
        </div>
      </div>
    </div>
  )
}

export default Modal
