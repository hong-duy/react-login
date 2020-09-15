export interface Size {
    id?: number;
    title?: string;
    width?: number;
    height?: number;
    selected?: boolean;
}

export interface UseSizeProp {
    actived?: any;
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
