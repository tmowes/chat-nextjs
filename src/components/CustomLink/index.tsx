import * as S from './styles'
import { CustomLinkProps } from './types'

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  variant = 'default',
  label,
  font = 'normal',
  icon: Icon,
  size = 20,
}) => {
  return (
    <S.Container href={href}>
      <S.Content variant={variant}>
        {Icon && <Icon size={size} />}
        <S.Label font={font}>{label}</S.Label>
      </S.Content>
    </S.Container>
  )
}

export default CustomLink
