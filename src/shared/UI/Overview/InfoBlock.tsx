interface InfoBlockProps {
  header: string;
  text: string;
}

export default function InfoBlock({ header, text }: InfoBlockProps) {
  return (
    <div className="info-block">
      <div className="info-block__header">{header} </div>
      <div className="info-block__content">{text}</div>
    </div>
  );
}
