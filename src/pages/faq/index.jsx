const FaqPage = () => {
  return (
    <div class="container">
      <h1 class="text-center">Preguntas Frecuentes</h1>
      <br></br>
      <div class="accordion" id="faqAccordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ¿Cómo puedo realizar un pedido?
              </button>
            </h2>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
            <div class="card-body">
              Para realizar un pedido, simplemente seleccione los artículos que desea comprar y agréguelos a su carrito de compras. Luego, procese su pedido y complete la información de pago y envío. Le enviaremos un correo electrónico de confirmación una vez que hayamos recibido su pedido.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ¿Cómo puedo cambiar mi dirección de envío o información de contacto?
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
            <div class="card-body">
              Por favor contáctenos lo antes posible si necesita cambiar su dirección de envío o información de contacto. Haremos todo lo posible para acomodar su solicitud, pero no podemos garantizar que podremos hacerlo si su pedido ya ha sido enviado.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ¿Cómo puedo hacer un cambio o una devolución?
              </button>
            </h2>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
            <div class="card-body">
              Le ofrecemos un plazo de 14 días desde la fecha de recepción para realizar cambios o devoluciones. Por favor contáctenos antes de devolver cualquier artículo y le proporcionaremos las instrucciones necesarias. Tenga en cuenta que los gastos de envío y manejo no son reembolsables y los clientes son responsables de los gastos de envío de devolución.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFour">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                ¿Cómo puedo saber el estado de mi pedido?
              </button>
            </h2>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faqAccordion">
            <div class="card-body">
              Una vez que hayamos enviado su pedido, le enviaremos un correo electrónico con un número de seguimiento y un enlace para que pueda rastrear su paquete. También puede ver el estado de su pedido ingresando a su cuenta en nuestra tienda en línea. Si tiene alguna pregunta sobre el estado de su pedido, no dude en ponerse en contacto con nosotros.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFive">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                ¿Qué métodos de pago acepta su tienda?
              </button>
            </h2>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#faqAccordion">
            <div class="card-body">
              Aceptamos tarjetas de crédito y débito, PayPal y transferencias bancarias. También ofrecemos la opción de pagar en efectivo en tiendas físicas si realiza un pedido en línea para recogida en tienda. Asegúrese de seleccionar el método de pago deseado al realizar su pedido.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSix">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                ¿Ofrecen envío gratis?
              </button>
            </h2>
          </div>
          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#faqAccordion">
            <div class="card-body">
              Ofrecemos envío gratis en pedidos superiores a $50 dentro de nuestro país. Los pedidos inferiores a $50 tendrán un cargo de envío de $5. También ofrecemos opciones de envío express con cargos adicionales.
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export { FaqPage }