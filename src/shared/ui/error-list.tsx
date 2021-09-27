type Props = {
  errors: [string, unknown][];
};

export const ErrorList: React.FC<Props> = ({ errors }) => {
  return (
    <ul className="error-messages">
      {errors.map(([key, val]) => (
        <li key={key}>
          {key} {val}
        </li>
      ))}
    </ul>
  );
};
