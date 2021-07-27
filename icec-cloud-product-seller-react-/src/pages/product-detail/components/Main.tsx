import React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import BaseStore from "../../../stores/BaseStore";
import "./index.css";

interface IProps extends RouteConfigComponentProps<{}> {
  baseStore?: BaseStore;
}

const Main = (props: IProps) => {

  (window as any).a = 2;

  window.onscroll = () => {
    console.log(222222222222222222)
  }

  return (
    <div>
      <div className='text'>
        seller
      </div>
    </div>
  );
};

export default Main;
