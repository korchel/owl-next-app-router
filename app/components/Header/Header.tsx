import cn from 'classnames';

import { HeaderProps } from "./Header.props";

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div className={cn(className)} {...props}>
      header
    </div>
  );
};

export default Header;