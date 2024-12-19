const formatDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(date).replace(/ de /g, ' de');
};

export default formatDate;
