import cn from 'classnames';

import Menu from "../Menu/Menu";
import Logo from '../logo.svg';
import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';

const Sidebar = ({className, ...props}: SidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Menu/>
    </div>
  );
};

export default Sidebar;