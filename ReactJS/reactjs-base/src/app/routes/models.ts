export interface ILayoutRouter {
  path?: string;
  children: IRouter[];
  layout: (props: IRouterRenderProps) => JSX.Element;
}
export interface IRouter {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}
export interface IRouterRenderProps {
  routers: IRouter[];
}