import { tagValidator } from './templates/foundation.js';

async function* validateTemplates(doc) {
    /*
    const [version, revision, release] = [
      doc.documentElement.getAttribute('version') ?? '',
      doc.documentElement.getAttribute('revision') ?? '',
      doc.documentElement.getAttribute('release') ?? '',
    ]; */
    /*
    if (!(version === '2007' && revision === 'B' && Number(release) > 3)) {
      dispatcher.dispatchEvent(
        newIssueEvent({
          validatorId: 'Template Validator',
          title: 'diag.missingnsd',
          message: '',
        })
      );
      return;
    } */
    const data = doc.querySelector('DataTypeTemplates');
    if (!data)
        return;
    const children = Array.from(data.children);
    for (const child of children) {
        const validator = tagValidator[child.tagName];
        if (!validator)
            continue;
        const childIssues = validator(child);
        yield childIssues;
    }
}

export { validateTemplates };
//# sourceMappingURL=validateTemplates.js.map
