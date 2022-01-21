type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Pre = ({ children }: Props) => {
  return <pre>{children}</pre>;
};
