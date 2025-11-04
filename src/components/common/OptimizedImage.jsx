import Image from "next/image";

const normalizeStaticSrc = (src) => {
  if (!src || typeof src !== "string") {
    return src;
  }

  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:")
  ) {
    return src;
  }

  if (src.startsWith("/")) {
    return src;
  }

  const cleaned = src.replace(/^(\.\/)+/, "");
  return `/${cleaned.replace(/^\/+/, "")}`;
};

const parseDimension = (value) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "number") {
    return value;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  quality = 75,
  className,
  style,
  priority = false,
  fill = false,
  ...rest
}) => {
  const normalizedSrc = normalizeStaticSrc(src);
  const resolvedWidth = parseDimension(width);
  const resolvedHeight = parseDimension(height);

  if (fill) {
    return (
      <Image
        {...rest}
        src={normalizedSrc}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className={className}
        priority={priority}
        style={style}
      />
    );
  }

  const shouldAutoSize = !resolvedWidth || !resolvedHeight;
  const mergedStyle = shouldAutoSize
    ? { width: "100%", height: "auto", ...style }
    : style;

  return (
    <Image
      {...rest}
      src={normalizedSrc}
      alt={alt}
      width={resolvedWidth ?? 0}
      height={resolvedHeight ?? 0}
      sizes={sizes}
      quality={quality}
      className={className}
      priority={priority}
      style={mergedStyle}
    />
  );
};

export default OptimizedImage;
