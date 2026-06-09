import { contactInfo } from '../data/products';

function ContactCard({ title, lines }) {
  return (
    <div className="card mb-3">
      <div className="card-header bg-info text-white">{title}</div>
      <div className="card-body">
        {lines.map((line, i) => (
          <p key={i} className="mb-0">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <div className="col-sm-12">
        <h3>Kapcsolat</h3>
      </div>
      <div className="col-sm-6">
        <ContactCard
          title={contactInfo.address.title}
          lines={contactInfo.address.lines}
        />
      </div>
      <div className="col-sm-6">
        <ContactCard
          title={contactInfo.contact.title}
          lines={contactInfo.contact.lines}
        />
      </div>
    </>
  );
}
