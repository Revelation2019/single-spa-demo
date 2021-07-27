import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteConfigComponentProps } from 'react-router-config';
import CountStore from '../stores/CountStore';
import styles from './index.module.scss';
import { Button } from 'antd';

interface IProps extends RouteConfigComponentProps<any> {
  countStore?: CountStore;
}

enum Oprate {
  MINUS = 'MINUS',
  PLUS = 'PLUS'
}

const Main = (props: IProps) => {
  const { countStore } = props;
  const { count, setValue } = countStore as CountStore;

  const oprate = (type: Oprate) => {
    switch (type) {
      case Oprate.MINUS:
        setValue('count', count - 1);
        break;
      case Oprate.PLUS:
        setValue('count', count + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Button onClick={() => oprate(Oprate.MINUS)}>-</Button>
      <span className={styles.text}>{count}</span>
      <Button onClick={() => oprate(Oprate.PLUS)}>+</Button>
    </div>
  )
}

export default inject('countStore')(observer(Main));