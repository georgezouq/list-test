import {Breadcrumb} from 'antd'
import { useRouter } from 'next/router'
import styles from './style.module.less'
import {pathToRegexp} from 'path-to-regexp'
import Link from 'next/link'

const breadcrumbNameMap: Record<string, string> = {
  '/messages': 'Messages',
  '': ''
}

const BreadCrumbComponent = () => {
  const router = useRouter()
  const {pathname} = router
  const {id} = router.query

  const createCrumbFromRouter = () => {
    const pathSnippets = pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = [] as any;

    console.log("pathSnippets:", pathSnippets)

    pathSnippets.forEach((_: string, index: number) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      Object.keys(breadcrumbNameMap).forEach((item) => {
        if (pathToRegexp(item).test(url)) {
          extraBreadcrumbItems.push(<Breadcrumb.Item key={url}>
            <Link href={url}>
              {breadcrumbNameMap[item]}
            </Link>
          </Breadcrumb.Item>);
        }
      });
    });

    console.log("extraBreadcrumbItems:", extraBreadcrumbItems)

    return [(
      <Breadcrumb.Item key="/">
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
  }

  return (
    <Breadcrumb className={styles.breadcrumb}>
      {createCrumbFromRouter()}
    </Breadcrumb>
  )
}

export default BreadCrumbComponent