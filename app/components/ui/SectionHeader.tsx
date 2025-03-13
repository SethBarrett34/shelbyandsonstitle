interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  center = false, 
  className = "" 
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${center ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {center ? (
        <div className="w-16 h-1 bg-primary mb-6 mx-auto"></div>
      ) : (
        <div className="w-16 h-1 bg-primary mb-6"></div>
      )}
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
