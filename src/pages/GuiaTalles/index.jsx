const GuiaTalles = () => {
  return (
    <div class="container">
      <h1 class="text-center">Guía de talles de ropa de hombres</h1>
      <p>En nuestra tienda, ofrecemos una amplia gama de talles para asegurarnos de que encuentres la ropa que se ajuste a ti de manera perfecta. Aquí te brindamos una guía de talles para ayudarte a elegir el tamaño correcto.</p>
      <h2>Talles de camisetas</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Talle</th>
            <th>Chest (cm)</th>
            <th>Cintura (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>91-96</td>
            <td>76-81</td>
          </tr>
          <tr>
            <td>M</td>
            <td>96-101</td>
            <td>81-86</td>
          </tr>
          <tr>
            <td>L</td>
            <td>101-106</td>
            <td>86-91</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>106-111</td>
            <td>91-96</td>
          </tr>
        </tbody>
      </table>
      <h2>Talles de pantalones</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Talle</th>
            <th>Cintura (cm)</th>
            <th>Cadera (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>28</td>
            <td>71-76</td>
            <td>86-91</td>
          </tr>
          <tr>
            <td>29</td>
            <td>76-81</td>
            <td>91-96</td>
          </tr>
          <tr>
            <td>30</td>
            <td>81-86</td>
            <td>96-101</td>
          </tr>
          <tr>
            <td>31</td>
            <td>86-91</td>
            <td>101-106</td>
          </tr>
          <tr>
            <td>32</td>
            <td>91-96</td>
            <td>106-111</td>
          </tr>
        </tbody>
      </table>
      <p>Recuerda que estos son solo guías generales y pueden variar según la marca y el estilo de la ropa. Si tienes dudas sobre el tamaño, no dudes en contactarnos para recibir asistencia adicional.</p>
    </div>
  )
}

export { GuiaTalles }