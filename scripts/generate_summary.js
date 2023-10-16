import { readFileSync, writeFileSync } from 'fs';

const summaryStartTag = '<!-- SUMMARY -->';
const summaryEndTag = '<!-- ¤SUMMARY -->';
const summaryRegexp = new RegExp(`${summaryStartTag}[^~]*${summaryEndTag}`, 's');

export function generateSummary() {
	const path = 'src/routes/+page.md';
	const docs = readFileSync(path).toString();

	const headings = docs.match(/##+ .*/g);
	const summary = headings
		.map((title) => title.split('## '))
		.map(([level, title]) => ({
			indentation: level.replace(/#/g, '  '),
			title,
			href: title
				.toLocaleLowerCase()
				.replace(/[^ a-zA-Z0-9]/g, '')
				.replace(/ /g, '-')
		}))
		.map(({ indentation, title, href }) => `${indentation}- [${title}](#${href})`)
		.join('\n');

	writeFileSync(
		path,
		docs.replace(summaryRegexp, `${summaryStartTag}\n${summary}\n${summaryEndTag}`)
	);
}
