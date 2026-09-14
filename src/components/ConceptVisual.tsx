import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  position?: string;
  priority?: boolean;
  className?: string;
};

export function ConceptVisual({ src, alt, position = "center", priority = false, className = "" }: Props) {
  return (
    <div className={`showcase-visual concept-visual ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 50vw"
        style={{ objectFit: "cover", objectPosition: position }}
      />
      <span className="concept-disclosure">تصویر مفهومی</span>
    </div>
  );
}
