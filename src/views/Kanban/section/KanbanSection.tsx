import { faPlus } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { UIButton, UITitle } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import { FC, PropsWithChildren } from 'react'
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import { TaskSection } from 'types/Server.types'
import { useThemeClassName } from 'utils'
import { firstWordToUpperCase } from 'utils/helpers/FirstWordToUpperCase.helper'
import sass from './KanbanSection.module.sass'

interface KanbanSectionProps {
  type: TaskSection
}

const KanbanSection: FC<PropsWithChildren<KanbanSectionProps>> = ({
  type,
  children
}) => {
  const themeCLasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['section'], themeCLasses)}>
      <div className={classNames(sass['section__header'])}>
        <UITitle size={AppTitleSize.M} order={AppTitleOrder.H2}>{firstWordToUpperCase(type)}</UITitle>
        <UIButton grey style={{padding: '5px 45px'}}><UIIcon icon={faPlus} active /></UIButton>
      </div>
      <div className={sass['section__content']}>{children}</div>
    </div>
  )
}

export default KanbanSection
