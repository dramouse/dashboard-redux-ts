import { useAppSelector } from "../../store"
import { AppTheme } from "../../types/AppTheme.types"

/**
 * хук для получения темы приложения
 * @returns актуальное состояние темы приложения типа AppTheme
 */
export const useAppTheme = (): AppTheme => {
  return useAppSelector(state => state.themeReducer.theme)
}