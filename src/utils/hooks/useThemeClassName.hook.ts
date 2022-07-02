import classNames from 'classnames'
import { AppTheme } from '../../store/theme/theme.slice'
import { useAppTheme } from '../hooks/useAppTheme.hook'

/**
 * Возвращает css класс в зависимости от текущей темы приложения
 * @param lightThemeSelector - модульный класс, задающий стили светлой темы
 * @param darkThemeSelector  - модульный класс, задающий стили темной темы
 * @returns список классов соответствующей темы
 */
export function useThemeClassName(
  lightThemeSelector: string,
  darkThemeSelector: string
): string {
  const theme = useAppTheme()
  return classNames({
    [lightThemeSelector]: theme === AppTheme.LIGHT,
    [darkThemeSelector]: theme === AppTheme.DARK,
  })
}
