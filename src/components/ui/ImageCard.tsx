import { cn } from '@/lib/utils';

interface ImageCardProps {
  imageSrc: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageCard = ({ imageSrc, alt, caption, className }: ImageCardProps) => {
  return (
    <figure className={cn("overflow-hidden rounded-lg border bg-card", className)}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="h-full w-full object-cover transition-all hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      {caption && (
        <figcaption className="p-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageCard;