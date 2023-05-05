import { GithubOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';
import Darkreader from 'react-darkreader';
import { Outlet, SelectLang } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <>
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
                <SelectLang />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Space dir="vertical" split={<Divider type="vertical" />}>
          <a
            href="https://github.com/yinyanfr/bmi-meter"
            target="_blank"
            rel="noopener noreferrer">
            <GithubOutlined /> GitHub
          </a>
        </Space>
      </footer>
    </>
  );
}
