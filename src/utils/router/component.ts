import { RouteComponent } from 'vue-router';
import { BasicLayout, BlankLayout } from '@/layouts';

type Lazy<T> = () => Promise<T>;

interface ModuleComponent {
  default: RouteComponent;
}

type LayoutComponent = Record<UnionKey.LayoutComponentType, Lazy<ModuleComponent>>;

/**
 *
 * @param layoutType - 布局类型
 */
export const getLayoutComponent = (layoutType: UnionKey.LayoutComponentType) => {
  const layoutComponent: LayoutComponent = {
    basic: BasicLayout,
    blank: BlankLayout,
  };

  return layoutComponent[layoutType];
};
