import { Button } from '@/shared/ui';

type Props = Readonly<{
  disabled: boolean;
}>;

export const ButtonSubmit = ({ disabled }: Props) => {
  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      size="lg"
      type="submit"
    >
      Sign In
    </Button>
  );
};
