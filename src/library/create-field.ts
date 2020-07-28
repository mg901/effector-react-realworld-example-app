type CreateField = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => Record<string, string>;

export const createField: CreateField = (e) => ({
  [e.target.name]: e.target.value,
});
