type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Banner = ({ children }: Props) => (
  <div className="banner">{children}</div>
);
