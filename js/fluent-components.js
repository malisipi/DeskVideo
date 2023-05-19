"use strict";

import {
    StandardLuminance,
    baseLayerLuminance,
    fillColor,
    allComponents,
    provideFluentDesignSystem
} from "../node_modules/@fluentui/web-components/dist/web-components.js";
  
provideFluentDesignSystem().register(allComponents);

baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode);