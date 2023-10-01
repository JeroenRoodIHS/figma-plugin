import { getAliasVariableName } from "./getAliasVariableName";
import { convertRGBA } from "./color/convertRGBA";

interface PropsI {
  modeName: string;
  variableValue: any;
  variableType: VariableResolvedDataType;
  colorMode: colorModeType;
  isDTCGForamt: boolean;
  includeValueAliasString: boolean;
}

export const normalizeValue = (props: PropsI) => {
  const {
    modeName,
    variableValue,
    variableType,
    colorMode,
    isDTCGForamt,
    includeValueAliasString,
  } = props;

  // console.log("variableValue", variableValue);

  if (variableValue?.type === "VARIABLE_ALIAS") {
    // console.log("VARIABLE_ALIAS", variableValue);
    // console.log("variables", variables);

    const aliasVariableName = getAliasVariableName(
      variableValue.id,
      modeName,
      isDTCGForamt,
      includeValueAliasString
    );

    return aliasVariableName;
  }

  if (variableType === "COLOR") {
    return convertRGBA(variableValue, colorMode);
  }

  if (variableType === "FLOAT") {
    return `${variableValue}px`;
  }

  return variableValue;
};
