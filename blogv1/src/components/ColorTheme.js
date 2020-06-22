import React from "react"
import IconButton from './icons/IconButton';
import useCycleColor from '../hooks/useCycleColor';
import ColorToggle from './icons/ColorToggle';

const ColorTheme = () => {
    const { cycleColorMode } = useCycleColor();
    return (
        <IconButton
          label="Change Theme Color"
          icon={<ColorToggle />}
          size={30}
          onClick={cycleColorMode}
        />
    );
}

export default ColorTheme;