import { SettingsOption, SettingsSubGroup } from '../../../components/SettingsBox';
import { ColorPicker, InputNumber, Switch } from 'antd';
import { Color } from 'antd/es/color-picker';

import { useAppDispatch, useAppSelector, useDispatchCallback } from '../../shared/app/hooks';
import { BorderSelectors } from '../../shared/app/selectors';
import { BorderActions } from './app';

import { HexColor } from '../../shared/domain/interfaces';

export const BorderSettings = () => {
  const enabled = useAppSelector(BorderSelectors.enable);
  const offset = useAppSelector(BorderSelectors.offset);
  const width = useAppSelector(BorderSelectors.width);
  const color = useAppSelector(BorderSelectors.color);

  const dispatch = useAppDispatch();

  const toggleEnabled = useDispatchCallback((value: boolean) => {
    dispatch(BorderActions.setEnable(value));
  });

  const updateOffset = useDispatchCallback((value: number | null) => {
    dispatch(BorderActions.setOffset(value || 0));
  });

  const updateWidth = useDispatchCallback((value: number | null) => {
    dispatch(BorderActions.setWidth(value || 0));
  });

  const updateColor = useDispatchCallback((color: Color) => {
    dispatch(BorderActions.setColor(color.toHex() as HexColor));
  });

  return (
    <SettingsSubGroup
      label={
        <SettingsOption>
          <span>Enable border on focus/activation</span>
          <Switch value={enabled} onChange={toggleEnabled} />
        </SettingsOption>
      }
    >
      <SettingsOption>
        <span>Border offset</span>
        <InputNumber value={offset} onChange={updateOffset} disabled={!enabled} />
      </SettingsOption>
      <SettingsOption>
        <span>Border width</span>
        <InputNumber value={width} onChange={updateWidth} disabled={!enabled} />
      </SettingsOption>
      <SettingsOption>
        <span>Border color</span>
        <ColorPicker
          disabledAlpha
          showText
          value={color}
          onChangeComplete={updateColor}
          disabled={!enabled}
        />
      </SettingsOption>
    </SettingsSubGroup>
  );
};