import Image from "next/image";

/** Render supplied artwork without cropping, recolouring or substituting another pose. */
export function ExportedAvatar({ src, size = 64, className, title }: {
  src: string;
  size?: number | string;
  className?: string;
  title?: string;
}) {
  return (
    <Image
      src={src}
      alt={title ?? ""}
      width={512}
      height={512}
      sizes={typeof size === "number" ? `${size}px` : "(max-width: 1023px) 160px, 380px"}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
