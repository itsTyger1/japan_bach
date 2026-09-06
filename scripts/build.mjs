import { copyFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = resolve(root, 'dist');
if (dirname(output) !== root) throw new Error('Build output must stay within the project.');
// Remove old server builds before publishing the static asset allowlist.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'korea.html', 'faqs.html', 'events.html', 'places.html', 'flights.html', 'styles.css', 'favicon.svg', 'og.png']) {
  await copyFile(resolve(root, 'public', file), resolve(output, file));
}
await mkdir(resolve(output, 'headshots'), { recursive: true });
for (const file of ['dylan.png', 'graham.png', 'harrison.png', 'kurtus.png', 'michael.png', 'patrick.png', 'sam.png', 'tye.png']) {
  await copyFile(resolve(root, 'public', 'headshots', file), resolve(output, 'headshots', file));
}
console.log('Static site built in dist/ (no dependencies or browser JavaScript).');
