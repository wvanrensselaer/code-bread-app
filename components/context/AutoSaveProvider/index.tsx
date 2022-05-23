import { createContext, useRef } from 'react';

const AutoSaveContext = createContext();

interface Props {
  children: JSX.Element;
}

export default function AutoSaveProvider(props: Props) {
  const ref = useRef();

  return <AutoSaveContext.Provider>{props.children}</AutoSaveContext.Provider>;
}
