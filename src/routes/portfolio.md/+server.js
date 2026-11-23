import sections from '$lib/sections.json';

export const prerender = true;

export function GET() {
  const content = sections.map(({ title, entries }) => {
    const items = entries.map(({ title, detail, lab, professor, description }) => {
      const heading = title ? `### ${title}${detail ? ` ${detail}` : ''}\n\n` : '';
      const attribution = [lab, professor && `With ${professor}`].filter(Boolean).join(' · ');
      return heading + (attribution ? `${attribution}\n\n` : '') + (description ? `${description}\n\n` : '');
    }).join('');
    return `## ${title}\n\n${items}`;
  }).join('');

  return new Response(`# Jorrel Rajan\n\n${content}`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
  });
}
