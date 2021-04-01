export const formatThaiDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('th-TH', {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
  })
