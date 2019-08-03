type SectionVariantType = 'noBorder';

const variantsToClasses: Record<SectionVariantType, string> = {
  noBorder: 'section--no-border',
};

export const sectionComponent = (data: { id: string; content: string; variants?: Array<SectionVariantType> }) => {
  const sctClasses = ['section'];

  if (data.variants) {
    data.variants.forEach((variant) => {
      if (variantsToClasses[variant]) {
        sctClasses.push(variantsToClasses[variant]);
      }
    });
  }

  return `
    <a name="section-${data.id}" class="jump_link" data-jump-link="true" id="${data.id}"></a>
    <section class="${sctClasses.join(' ')}">
      <div class="content__inner content__inner--offset-header">
        ${data.content}
      </div>
    </section>
  `;
};
