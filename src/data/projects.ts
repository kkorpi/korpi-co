export type Project = {
  title: string;
  description: string;
  url?: string;
  year?: string;
  details?: string;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short one-line description of what this project is.',
    year: '2025',
    url: 'https://example.com',
    details:
      'A longer paragraph that appears when the project is expanded. Talk about what you built, the constraints, and what shipped.',
  },
  {
    title: 'Project Two',
    description: 'Another project, another short description.',
    year: '2024',
    details:
      'Optional longer details revealed on click. Remove the details field on any project to make it non-expandable.',
  },
  {
    title: 'Project Three',
    description: 'A third example, no expand state.',
    year: '2023',
  },
];
