type OpenGraphType = {
  title1: string;
  title2: string;
  description?: string;
  icon: React.ReactNode;
  url?: string;
};

export const OGimageBase = ({
  title1,
  title2,
  description,
  icon
}: OpenGraphType) => (
  <div
    style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'relative'
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#dddddd',
        opacity: 0.2,
        padding: '1rem',
        backgroundImage:
          'linear-gradient(#929292 1px, transparent 1px), linear-gradient(to right, #929292 1px, #e5e5f7 1px)',
        backgroundSize: '30px 30px'
      }}
    />
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: 50,
        left: 40,
        width: '80%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        <span
          style={{
            fontSize: '7rem',
            lineHeight: 1,
            fontWeight: 600,
            fontFamily: 'SourceCodePro',
            marginRight: '-1rem'
          }}
        >
          {title1}
        </span>
        {icon}
        <span
          style={{
            fontSize: '7rem',
            lineHeight: 1,
            fontWeight: 600,
            fontFamily: 'SourceCodePro'
          }}
        >
          {title2}
        </span>
      </div>
    </div>
    {description && (
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 100,
          width: '100%',
          fontSize: '3.5rem',
          textAlign: 'center',
          fontFamily: 'Urbanist'
        }}
      >
        <p
          style={{
            width: '80%',
            fontSize: '3.5rem',
            margin: '0 auto'
          }}
        >
          {description}
        </p>
      </div>
    )}
  </div>
);
