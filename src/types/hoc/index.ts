export type Component = () => JSX.Element;

export type Hoc = (component: Component) => Component;
