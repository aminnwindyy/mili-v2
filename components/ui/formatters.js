export const formatCurrency = (amount) => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(1)} میلیارد ریال`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)} میلیون ریال`;
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(0)} هزار ریال`;
  }
  return `${amount.toLocaleString('fa-IR')} ریال`;
};

export const formatNumber = (number) => {
  return number.toLocaleString('fa-IR');
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fa-IR');
};

export const formatPercent = (percent) => {
  return `${percent.toFixed(1)}%`;
};
