import { css, cx } from 'emotion';
import { color } from '../../globals';

const button = css`
  margin-top: 10px;
  border: 0;

  padding: 5px 10px;
  color: ${color['w-100']};
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 4px;
  font-size: 12px;
  &.fluid {
    width: 100%;
  }
  svg {
    margin-right: 10px;
  }
`;

const variants = {
  primary: color['r-100'],
  secondary: color['p-100'],
  disable: color['w-200'],
};

export type variantName = keyof typeof variants;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variantName;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  ...props
}) => {
  const { children, className } = props;
  const background = css`
    background: ${variants[variant]};
  `;
  return (
    <button {...props} className={cx(className, button, background)}>
      {children}
    </button>
  );
};
