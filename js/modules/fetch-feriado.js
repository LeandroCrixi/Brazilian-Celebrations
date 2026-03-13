const initFetchFeriado = () => {
  const fetchFeriados = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      const feriado = document.querySelector(".feriados");
      feriado.innerHTML = json.length;
    } catch (error) {
      console.log(error);
    }
  };

  fetchFeriados("https://brasilapi.com.br/api/feriados/v1/2026");
};

export default initFetchFeriado();
