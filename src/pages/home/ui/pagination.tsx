import { Pagination } from '@/shared/ui';
import { pageChanged } from '../model';

type Props = Readonly<{
  current: number;
  total: number;
  pageSize: number;
}>;

export const PagePagination = ({ current, total, pageSize }: Props) => {
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onPageChange={pageChanged}
    />
  );
};
