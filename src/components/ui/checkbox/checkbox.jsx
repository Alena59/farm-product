import React from "react";
import { Label } from "../../../components/styled/label/label";
import { VisuallyHiddenInput } from "../../../components/styled/visually-hidden-input/visually-hidden-input";

// чекбокс
function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;