import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import * as article from '@/entities/article';
import { uniq } from '@/shared/library/uniq';
import { Form, List } from '@/shared/ui';
import { Tag } from './tag';

export const AddTagForm = () => {
  const { handleSubmit, tags, handleAddTag, handleDeleteTag } = useForm();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control autoComplete="off" name="tags" onKeyDown={handleAddTag} />
      <List>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onTagClick={handleDeleteTag}>
            {tag}
          </Tag>
        ))}
      </List>
    </Form>
  );
};

function useForm() {
  const { setValue, watch } = useFormContext();
  const tags = watch('tagList') as article.types.Article['tagList'];

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const tag = event.currentTarget.value;

    if (event.key === 'Enter' && tag) {
      setValue('tagList', uniq(tags.concat(tag)));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.tags.value = '';
  };

  const handleDeleteTag = useCallback(
    (tag: string) => {
      setValue(
        'tagList',
        tags.filter((item) => item !== tag),
      );
    },
    [setValue, tags],
  );

  return {
    tags,
    handleAddTag,
    handleSubmit,
    handleDeleteTag,
  };
}
