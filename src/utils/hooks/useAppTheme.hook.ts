import { useAppSelector } from "../../store"
import { AppTheme } from "../../store/theme/theme.slice"

/**
 * хук для получения темы приложения
 * @returns актуальное состояние темы приложения типа AppTheme
 */
export const useAppTheme = (): AppTheme => {
  return useAppSelector(state => state.themeReducer.theme)
}