import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import './index.css';

const Main = (props: RouteConfigComponentProps<any>) => {

  (window as any).a = 1;

  window.onscroll = () => {
    console.log(1111111111111111111)
  }

  return (
    <div className='text'>InquiryDetailByParts</div>
  )
}

export default Main;