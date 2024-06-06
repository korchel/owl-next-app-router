import cn from 'classnames';
import Link from 'next/link';

import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu,interface";
import getMenu from "../../api/getMenu";
import BooksIcon from './icons/books.svg';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  { 
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

const Menu = async () => {
  const menu = await getMenu(0);
  const active = 0;
  console.log(menu);

  const buildFirstLevel = () => {
    return (
      <>{firstLevelMenu.map((item, index) => (
        <div key={item.route}>
          <Link  href={`/${item.route}`}>
            <div className={cn(styles.firstLevel, {[styles.firstLevelActive]: index === active})}>
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Link>
          <div className={styles.firstLevelBlock}>
            {index === active && buildSecondLevel(item)}
          </div>
        </div>
      ) )}</>
    )
  }

  const buildSecondLevel = (firstLevelMenuItem: FirstLevelMenuItem) => {
    return (

        menu.map((item) => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {[styles.secondLevelBlockOpen]: item.isOpen})}>
              {true && buildThirdLevel(item.pages, firstLevelMenuItem.route)}
            </div>
          </div>
        ))

    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map((page) => (
        <Link href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {[styles.thirdLevelActive]: false})} key={page.category}>
          {page.category}
        </Link>
      ))
    )
  }

  return (

      <div className={styles.menu}>
        {buildFirstLevel()}
      </div>

  );
};

export default Menu;