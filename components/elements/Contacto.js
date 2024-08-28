import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append("access_key", "0482e3de-f1e2-465d-8d19-c11e56b63b77");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    data.append("recipient", "benittocamellou@gmail.com"); // Add the recipient email here


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      console.log(result);
      // Clear the form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Set the state to show the "Thank you" message
      setIsSubmitted(true);
    }
  }

  return (
    <section className="section-box">
      <div className="container mb-50 mt-70">
        <div className="bdrd-58 box-gray-100 icon-wave">
          <div className="row">
            <div className="col-lg-12 mb-60">
              {/* ... your existing content ... */}
            </div>
            <div className="col-lg-8">
              {isSubmitted ? (
                <div>
                  <h2>¡Gracias por enviar tu mensaje!</h2>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nombre"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Tu correo"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Teléfono"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="¿En qué podemos ayudar?"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Enviar Mensaje
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        Al hacer clic aceptas nuestros términos y política.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
