import { ComponentProps, JSXElementConstructor, ReactNode } from "react";

type TAlias = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type commonProps<T extends TAlias> = Omit<
  ComponentProps<T>,
  "className"
> & {
  __dangerouslysetclassname?: string;
};

export type commonPropsWithChildren<T extends TAlias> = commonProps<T> & {
  children?: ReactNode;
};
