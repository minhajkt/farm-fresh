export const validateName = (name: string) => {
  if (!name.trim()) return "Name is required";
  if (name.trim().length < 3) return "Name must be at least 3 characters";
  return "";
};

export const validatePhone = (phone: string) => {
  if (!phone.trim()) return "Phone is required";
  if (!/^\d{10}$/.test(phone.trim())) return "Phone must be exactly 10 digits";
  return "";
};

export const validateLocation = (location: string) => {
  if (!location.trim()) return "Location is required";
  return "";
};
