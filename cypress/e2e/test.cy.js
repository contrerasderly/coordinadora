describe("Test Coordinadora", () => {
  const requestBody = {
    tipoEnvio: "1",
    tipoProducto: "4",
    indicativo: "57",
    tipoDocumento: "13",
    email: "ana@gmail.com",
    personaEntrega: "1",
    indicativoEntrega: "57",
    medidasAproximadas: [
      {
        id: 2,
        tipoPaq: "Par de zapatos",
        nombrePaq: "Par de za...",
        cantidad: 1,
      },
    ],
    ciudad: "Envigado (Ant)",
    via: "",
    numero: "",
    detalle: "PARQUE SAN JOSE BOD 14",
    tipoVia: 16,
    nombres: "prueba",
    apellidos: "prueba1",
    documento: "1036149000",
    celular: "3005777777",
    ciudadDetalle: {
      nombre_terminal_operativa: "Medellin",
      tipo_servicio: "A",
      dane_ciudad: "05266",
      dane_actual: "05266000",
      ciudad_tarifa: "05266000",
      sms: true,
      cubre_mqp: true,
      codigo_postal: "055428",
      terminal_operativa: 2,
      cubre_me: true,
      area_telefono: 4,
      observaciones2: "FCE - RD - FD - RCE",
      codigo: "05266000",
      tipo_poblacion: "D",
      activo: true,
      codigo_terminal: 2,
      codigo_interno: 204,
      mensajeria: true,
      cubre_mm: false,
      departamento: "05",
      cubre_cm: false,
      nombre: "Envigado (Ant)",
      abreviado: "ENVIGADO",
      nombre_terminal: "Medellin",
      observaciones: "",
    },
    direccion: "Cl 10 # 20 30",
    fechaRecogida: "2024-05-14",
    nombreEntrega: "prueba",
    apellidosEntrega: "prueba1",
    celularEntrega: "3045677777",
    emailUsuario: "anar.7@gmail.com",
    descripcionTipoVia: "Kilómetro",
    aplicativo: "envios",
  };

  const requestBody2 = {
    tipoEnvio: "1",
    tipoProducto: "4",
    indicativo: "57",
    tipoDocumento: "13",
    email: "ana@gmail.com",
    personaEntrega: "1",
    indicativoEntrega: "57",
    medidasAproximadas: [
      {
        id: 2,
        tipoPaq: "Par de zapatos",
        nombrePaq: "Par de za...",
        cantidad: 1,
      },
    ],
    ciudad: "Envigado (Ant)",
    via: "",
    numero: "",
    detalle: "PARQUE SAN JOSE BOD 14",
    tipoVia: 16,
    nombres: "prueba",
    apellidos: "prueba1",
    documento: "1036149000",
    celular: "3005777777",
    ciudadDetalle: {
      nombre_terminal_operativa: "Medellin",
      tipo_servicio: "A",
      dane_ciudad: "05266",
      dane_actual: "05266000",
      ciudad_tarifa: "05266000",
      sms: true,
      cubre_mqp: true,
      codigo_postal: "055428",
      terminal_operativa: 2,
      cubre_me: true,
      area_telefono: 4,
      observaciones2: "FCE - RD - FD - RCE",
      codigo: "05266000",
      tipo_poblacion: "D",
      activo: true,
      codigo_terminal: 2,
      codigo_interno: 204,
      mensajeria: true,
      cubre_mm: false,
      departamento: "05",
      cubre_cm: false,
      nombre: "Envigado (Ant)",
      abreviado: "ENVIGADO",
      nombre_terminal: "Medellin",
      observaciones: "",
    },
    direccion: "Cl 10 # 20 30",
    fechaRecogida: "2024-05-14",
    nombreEntrega: "Prueba",
    apellidosEntrega: "Prueba2",
    celularEntrega: "3045677777",
    emailUsuario: "",
    descripcionTipoVia: "Kilómetro",
    aplicativo: "envios",
  };

  it("Validar status del response", () => {
    cy.request({
      method: "POST",
      url: "https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Validar creación con fecha que sobrepase los 5 días a la fecha actual", () => {
    cy.request({
      method: "POST",
      url: "https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida",
      body: requestBody,
    }).then((response) => {
      expect(response.body.data.message).to.eq(
        "El campo fecha: 14-05-2024, no debe ser mayor a la fecha: 11-05-2024"
      );
    });
  });

  it("Validar creación con campos obligatorios vacíos", () => {
    cy.request({
      method: "POST",
      url: "https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida",
      body: requestBody2,
    }).then((response) => {
      expect(response.body.message).to.eq(
        "Los valores de entrada no son correctos."
      );
    });
  });
});
