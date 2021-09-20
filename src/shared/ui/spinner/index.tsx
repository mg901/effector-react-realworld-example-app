import './index.css';

type Props = Readonly<{
  loading: boolean;
}>;

export const Spinner: React.FC<Props> = ({ loading }) =>
  !loading ? null : (
    <div className="spinner-border text-success">
      <span className="sr-only" />
    </div>
  );
