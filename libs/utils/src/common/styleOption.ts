type optionType = { [key: string]: string | number | boolean };

export type optionPropsType<T extends optionType> =
  | string
  | { value: string; option?: T };

export const styleOption = {
  option(option: optionType): string[] {
    return Object.keys(option).reduce((accm: string[], curr: string) => {
      const _value = { ...option }[curr];
      if (
        !Object.prototype.hasOwnProperty.call(option, curr) ||
        _value === false
      ) {
        return accm;
      }
      if (typeof _value === "boolean") {
        return [...accm, curr];
      } else {
        return [...accm, `${curr}-${_value}`];
      }
    }, []);
  },
  converter(
    props?: optionPropsType<optionType>,
    defaultValue?: optionType
  ): { value: string; option: optionType } {
    if (props === undefined) {
      return {
        value: "",
        option: { ...defaultValue }
      };
    }

    if (typeof props === "string") {
      return {
        value: props,
        option: { ...defaultValue }
      };
    } else {
      return {
        value: props.value,
        option: Object.assign(
          {
            ...defaultValue
          },
          { ...props.option }
        )
      };
    }
  }
};
