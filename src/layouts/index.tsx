import { SetLang } from '@/components';
import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Darkreader from 'react-darkreader';
import { Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <nav className="padding-10">
      <div className={styles.navs}>
        <div className={styles.apart}>
          <ul>
            <li>BMI Meter</li>
          </ul>

          <ul>
            <li>
              <Button
                type="link"
                icon={<GithubOutlined />}
                onClick={() => {
                  window.open('https://github.com/yinyanfr/bmi-meter');
                }}
              />
            </li>
            <li>
              <Darkreader />
            </li>
            <li>
              <SetLang />
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
