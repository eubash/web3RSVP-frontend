import {ReactNode, CSSProperties, FormEventHandler} from "react";

export declare interface AppProps {
  children?: ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: CSSProperties; // to pass through style props
  onChange?: FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
}