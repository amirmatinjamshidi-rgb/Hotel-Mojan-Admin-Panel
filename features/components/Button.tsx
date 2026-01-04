import { cn } from "@/utils/cn";

const buttonstyles = {
  blue1: "bg-cyan-800 hover:bg-cyan-900",
  blue2: "bg-cyan-700 hover:bg-cyan-800",
  orange1: "bg-orange-300 hover:bg-orange-200",
  orange2: "bg-orange-200 hover:bg-orange-300",
  white: "bg-white",
  gray: "bg-gray-200",
} as const;
const textColor = {
  blue: "text-cyan-700",
  orange: "text-orange-300",
  gray: "text-gray-400",
  none: "text-black",
};
const RoundedVariants = {
  none: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
} as const;

const borderColors = {
  none: "border-white",
  blue: "border-cyan-700",
  gray: "border-gray-200",
  orange: "border-orange-300",
} as const;

const sizeVariants = {
  small: " h-[40px]",
  medium: " h-[48px]",
  big: " h-[52px]",
} as const;

type ButtonColor = keyof typeof buttonstyles;
type ButtonRadius = keyof typeof RoundedVariants;
type ButtonBorder = keyof typeof borderColors;
type ButtonSize = keyof typeof sizeVariants;
type textColor = keyof typeof textColor;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  radius?: ButtonRadius;
  border?: ButtonBorder;
  size?: ButtonSize;
  text?: textColor;
}

export default function Button({
  color = "blue1",
  radius = "md",
  border = "none",
  size = "medium",
  text = "none",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-semibold transition-all inline-flex items-center justify-center border cursor-pointer",
        buttonstyles[color],
        sizeVariants[size],
        RoundedVariants[radius],
        borderColors[border],
        textColor[text],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
