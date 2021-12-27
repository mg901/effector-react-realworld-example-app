type Props = {
  errors: [string, unknown][];
};

export const ErrorList = ({ errors }: Props) => {
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
