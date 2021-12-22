import { useRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import * as article from 'entities/article';
import { uniq } from 'shared/library/uniq';
import { Form, List } from 'shared/ui';
import { Tag } from './tag';

export const AddTagForm: React.FC = () => {
  const { handleSubmit, ref, tags, handleAddTag, handleDeleteTag } = useForm();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control ref={ref} onKeyDown={handleAddTag} />
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
  const ref = useRef<HTMLInputElement>(null);
  const tags = watch('tagList') as article.types.Article['tagList'];

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const tag = ref.current?.value;

    if (event.key === 'Enter' && tag) {
      setValue('tagList', uniq(tags.concat(tag)));
      ref.current.value = '';
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
    ref,
    tags,
    handleAddTag,
    handleSubmit,
    handleDeleteTag,
  };
}
