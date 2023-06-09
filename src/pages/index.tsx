import { BMIDisplay, BMIForm } from '@/features';
import { Divider } from 'antd';
import { type FC } from 'react';
import styles from './index.less';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <section>
            <BMIForm />
          </section>

          <Divider />

          <section>
            <BMIDisplay />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
