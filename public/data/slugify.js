export const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, '-')              // replace spaces with dashes
      .replace(/[^\u0000-\u007E\w-]/g, '') // remove non-ASCII
      .replace(/--+/g, '-')              // replace multiple dashes
      .replace(/^-+|-+$/g, '');          // trim dashes from start/end
  