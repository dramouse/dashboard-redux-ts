import { useThemeClassName } from './hooks/useThemeClassName.hook'
import { useAppTheme } from './hooks/useAppTheme.hook'
import { useRefresher } from './hooks/useRefresher.hook'

import { firstWordToUpperCase } from './helpers/firstWordToUpperCase.helper'
import { getNextTaskSection } from './helpers/getNewTaskSection.helper'
import { getPrevTaskSection } from './helpers/getNewTaskSection.helper'
import { confirmAction } from './helpers/confirmAction.helper'

export { useAppTheme, useRefresher, useThemeClassName }
export {
  getNextTaskSection,
  getPrevTaskSection,
  firstWordToUpperCase,
  confirmAction,
}
