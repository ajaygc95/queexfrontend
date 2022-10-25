export default function validateItemInfo(values) {
  let errors = {};

  if (!values.upc.trim()) {
    errors.upc = "UPC is required";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.price) {
    errors.price = "Price is required";
  }
  if (!values.cost) {
    errors.cost = "Cost is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  }

  if (!values.category) {
    errors.category = "Category is required";
  }

  return errors;
}
