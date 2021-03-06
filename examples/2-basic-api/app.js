const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");
    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        return `<article class="product">
      <img
        src="${url}" alt="${name}"
      />
      <div class="info">
        <h5>utopia sofa</h5>
        <h5 class="price">$39.95</h5>
      </div>
    </article>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h2>There was an error, please try agian later</h2>`;
  }
};

fetchData();
