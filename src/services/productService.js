export async function getProductList(searchTerm) {
  const res1 = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ''}`);
  const res2 = await fetch(`http://localhost:8000/444/products?species_like=${searchTerm ? searchTerm : ''}`);
  const res3 = await fetch(`http://localhost:8000/444/products?description_like=${searchTerm ? searchTerm : ''}`);
  const res = await Promise.all([res1, res2, res3]);

  // Check each response's status
  res.forEach(response => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
  });
  // Convert each response to JSON
  const [nameData, speciesData, descriptionData] = await Promise.all(
    res.map(res => res.json())
  );
  // Combine the results from all fetch requests and remove duplicates
  const allData = [...nameData, ...speciesData, ...descriptionData];
  const uniqueData = Array.from(new Set(allData.map(product => product.id))).map(id => allData.find(product => product.id === id));
  return uniqueData;
}

export async function getProduct(id) {
  const res = await fetch(`http://localhost:8000/444/products/${id}`);
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = await res.json();
  return data
}

export async function getService(id) {
  const res = await fetch(`http://localhost:8000/444/featured_products/${id}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const data = await res.json();
  return data
}
export async function getFeaturedList() {
  const response = await fetch("http://localhost:8000/444/featured_products");
  const data = await response.json()
  return data;
}