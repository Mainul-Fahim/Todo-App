import { Resolver } from "react-hook-form";
import { FormData } from "../interface/interface";

export const resolver: Resolver<FormData> = async (values) => {

    const isValid = values.title && values.description && values.title.length >= 3 &&
      values.title.length <= 50;
  
    return {
      values: isValid ? values : {},
      errors: !isValid
        ? {
          title: {
            type: 'required',
            message: ' is required.',
            ...(!values.title || values.title.length < 3
              ? {
                minLength: {
                  value: 3,
                  message: 'Must be at least 3 characters long.',
                },
              }
              : {}),
            ...(values.title && values.title.length > 50
              ? {
                maxLength: {
                  value: 50,
                  message: 'Must be 50 characters or less.',
                },
              }
              : {}),
          },
          description: {
            type: 'required',
            message: ' is required.',
          },
        }
        : {},
    };
  };