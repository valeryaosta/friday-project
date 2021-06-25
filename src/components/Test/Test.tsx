import React from "react";
import {SuperButton} from "../../common/Button/SuperButton";
import {SuperCheckbox} from "../../common/Checkbox/SuperCheckbox";
import {SuperInputText} from "../../common/Input/SuperInputText";

export const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>Test</SuperButton>
            <SuperCheckbox/>
        </div>
    )
}