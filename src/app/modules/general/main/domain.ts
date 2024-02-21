import { Rect } from '../../shared/app/Rect';

import { AnimationsState } from '../animations/domain';
import { BorderState } from '../border/domain';
import { ContainerTabsState } from '../containerTopBar/domain';

export enum FocusFollowsMouse {
  KOMOREBI = 'Komorebi',
  WINDOWS = 'Windows',
}

export enum UnmanagedWindowOperationBehaviour {
  OP = 'Op',
  NO_OP = 'NoOp',
}

export enum WindowContainerBehaviour {
  CREATE = 'Create',
  APPEN = 'Append',
}

export enum WindowHidingBehaviour {
  HIDE = 'Hide',
  MINIMIZE = 'Minimize',
  CLOAK = 'Cloak',
}

export enum CrossMonitorMoveBehaviour {
  SWAP = 'Swap',
  INSERT = 'Insert',
}

export interface GeneralSettingsState {
  border: BorderState;
  altFocusHack: boolean;
  autoStackinByCategory: boolean;
  animations: AnimationsState;
  mouseFollowFocus: boolean;
  focusFollowsMouse: FocusFollowsMouse | null;
  resizeDelta: number;
  containerPadding: number;
  workspacePadding: number;
  globalWorkAreaOffset: Rect.plain;
  invisibleBorders: Rect.plain;
  windowContainerBehaviour: WindowContainerBehaviour;
  windowHidingBehaviour: WindowHidingBehaviour;
  unmanagedWindowOperationBehaviour: UnmanagedWindowOperationBehaviour;
  crossMonitorMoveBehaviour: CrossMonitorMoveBehaviour;
  containerTopBar: ContainerTabsState;
}