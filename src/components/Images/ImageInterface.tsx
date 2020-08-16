export interface UseImageProp {
  items?: any;
  /**
   * Custom
   */
  clsName?: string;
  /**
   * Callback fired when selected item
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (item: any, event: React.ChangeEvent<unknown>) => void;
}
