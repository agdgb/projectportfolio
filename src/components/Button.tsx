import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

type Common = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never; // disallow href on <button>
  };

type LinkButtonProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string; // required for <a>
  };

export function Button(props: ButtonProps | LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
    "border hover:shadow-sm transition";

  if ("href" in props) {
    const { className, children, ...rest } = props;
    return (
      <a {...rest} className={`${base} ${className ?? ""}`}>
        {children}
      </a>
    );
  }

  const { className, children, ...rest } = props;
  return (
    <button {...rest} className={`${base} ${className ?? ""}`}>
      {children}
    </button>
  );
}
