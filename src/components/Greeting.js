const Greeting = ({ lang, children }) => {
  let salutation;

  switch (lang) {
    case 'de':
      salutation = 'Hallo';
      break;
    case 'en':
      salutation = 'Hello';
      break;
    case 'es':
      salutation = 'Hola';
      break;
    case 'fr':
      salutation = 'Bonjour';
      break;

    default:
      break;
  }

  return (
    <div>
      <p>
        {' '}
        {salutation} {children}{' '}
      </p>
    </div>
  );
};

export default Greeting;
