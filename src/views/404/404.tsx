import { UIText, UITitle } from 'components/UI'
import { FC } from 'react'

export const Page404: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <UITitle>Ooops! Page not found (404)</UITitle>
      <UIText>Looks like you entered a non-existent URL.</UIText>
      <UIText>Choose something from side menu list</UIText>
    </div>
  )
}


export default Page404
