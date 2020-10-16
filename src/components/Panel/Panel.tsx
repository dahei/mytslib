import React from 'react';
import styles from './panelStyles.module.scss';

export interface Props {
  title: string;
}

export const Panel: React.FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        {title}
        <i className={'icon-heart'} />
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
