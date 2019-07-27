/**
 * Given string @param template, replace all occurances of variables with the values provided in the
 * map @param variables
 *
 * @param template - String
 * @param variables - Object
 */
export const stringTemplateReplace = (template: string, variables: Record<string, any>) => {
  Object.keys(variables).forEach((key) => {
    if (variables[key] instanceof Object) {
      template = stringTemplateReplace(
        template,
        Object.keys(variables[key]).reduce(
          (acc, cur) => ({
            ...acc,
            [`${key}.${cur}`]: variables[key][cur],
          }),
          {},
        ),
      );
      return;
    }

    template = template.replace(new RegExp(`<%=${key}%>`, 'g'), variables[key]);
  });

  return template;
};
