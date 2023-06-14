declare namespace UnionKey {
  /**
   * 路由的组件
   * - basic - 基础布局，具有公共部分的布局
   * - blank - 空白布局
   * - multi - 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
   * - self - 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
   */
  type RouteComponentType = 'basic' | 'blank' | 'multi' | 'self';
  /**
   * 布局组件的名称
   * - basic 基础布局
   * - blank 空白布局
   */
  type LayoutComponentType = 'basic' | 'blank';
}
