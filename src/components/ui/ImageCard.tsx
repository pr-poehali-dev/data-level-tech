import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ImageCardProps {
  imageSrc: string;
  alt: string;
  caption?: string;
  className?: string;
}

const ImageCard = ({ imageSrc, alt, caption, className }: ImageCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="aspect-video relative">
        <img
          src={imageSrc}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </div>
      {caption && (
        <div className="p-3 text-sm text-muted-foreground text-center">
          {caption}
        </div>
      )}
    </Card>
  );
};

export default ImageCard;