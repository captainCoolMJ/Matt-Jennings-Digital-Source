type TitleVariantType = 'paddingBottomHalf' | 'large' | 'appTitle';

const variantsToClasses: Record<TitleVariantType, string> = {
  paddingBottomHalf: 'title--padding-bottom-small',
  large: 'title--large',
  appTitle: 'title--app',
};

export const titleComponent = (data: {
  priority: 1 | 2 | 3 | 4;
  content: string;
  variants?: Array<TitleVariantType>;
}) => {
  const classes = ['title', `title--${data.priority}`];

  if (data.variants) {
    data.variants.forEach((variant) => {
      classes.push(variantsToClasses[variant]);
    });
  }

  return {
    1: `<h1 class="${classes.join(' ')}">${data.content}</h1>`,
    2: `<h2 class="${classes.join(' ')}">${data.content}</h2>`,
    3: `<h3 class="${classes.join(' ')}">${data.content}</h3>`,
    4: `<h4 class="${classes.join(' ')}">${data.content}</h4>`,
  }[data.priority];
};
