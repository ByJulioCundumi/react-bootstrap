import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark fixed-top navbar-expand-md shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand">LogoTipo</a>
          <button className="navbar-toggler" type="button" data-bs-target="#menu" data-bs-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-md-flex justify-content-around">
              <ul className="navbar-nav">
                <li className="nav-item"><a href="#" className="nav-link">One</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Dos</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Tres</a></li>
              </ul>
              <form action="#" className="d-flex">
                <input type="search" className="form-control" placeholder="Search"/>
                <button className="btn btn-danger" type="button">Search</button>
              </form>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" id="menu">
          <div className="offcanvas-header">
            <h2 className="offcanvas-title">Menu de navegacion</h2>
            <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <nav className="nav d-flex flex-column">
              <a href="#" className="nav-link">Uno</a>
              <a href="#" className="nav-link">Dos</a>
              <a href="#" className="nav-link">Tres</a>
            </nav>
          </div>
        </div>

        <div className="container mt-5">
          <section className="row">
            <div className="col mt-4">

              <div className="carousel slide shadow" id="hero" data-bs-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://www.imec-int.com/sites/default/files/imported/miniaturization-of-medical-devices-is-crucial-for-space-exploration.jpg" alt="" className="img-fluid" />
                      <div className="carousel-caption">
                        <h2 className="carousel-header">Welcome to outspace</h2>
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi facilis labore adipisci atque autem delectus dolor fugiat modi, eveniet odit.
                        </p>
                      </div>
                  </div>

                  <div className="carousel-item">
                    <img src="https://images.herb.co/wp-content/uploads/2017/10/GettyImages-548979711.jpg" alt="" className="img-fluid" />
                    <div className="carousel-caption">
                        <h2 className="carousel-header">Welcome to outspace</h2>
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi facilis labore adipisci atque autem delectus dolor fugiat modi, eveniet odit.
                        </p>
                      </div>
                  </div>

                  <div className="carousel-item">
                    <img src="https://www.universetoday.com/wp-content/uploads/2023/07/Euclid_looking_into_the_Universe_ESA24697255.jpeg" alt="" className="img-fluid" />
                  </div>
                  <div className="carousel-caption">
                        <h2 className="carousel-header">Welcome to outspace</h2>
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi facilis labore adipisci atque autem delectus dolor fugiat modi, eveniet odit.
                        </p>
                      </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>

                <div className="carousel-indicators">
                  <button className="active" type="button" data-bs-target="#hero" data-bs-slide-to="0"></button>
                  <button className="" type="button" data-bs-target="#hero" data-bs-slide-to="1"></button>
                  <button className="" type="button" data-bs-target="#hero" data-bs-slide-to="2"></button>
                </div>

              </div>

            </div>
          </section>

          <section className="row mt-4">
            <div className="col">

              <div className="d-flex flex-column flex-md-row gap-5">
                <div className="shadow-sm p-3 border">
                  <h3 className="text-center">Title 1</h3>
                  <div>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus?
                    </p>
                  </div>
                </div>

                <div className="shadow-sm p-3 border">
                  <h3 className="text-center">Title 2</h3>
                  <div>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus?
                    </p>
                  </div>
                </div>

                <div className="shadow-sm p-3 border">
                  <h3 className="text-center">Title 3</h3>
                  <div>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus?
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="row mt-3 align-items-center">

            <div className="col-12 col-md-6">
              <img src="https://w.forfun.com/fetch/c2/c22f6b99a4f837af688807d5f45eed8c.jpeg" alt="" className="imgfluid rounded shadow" />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <div className="accordion" id="planets">

                <div className="accordion-item gap-1 d-flex">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-target="#earth" data-bs-toggle="collapse">Earth</button>
                  </h2>
                  <div className="accordion-collapse show collapse" id="earth" data-bs-parent="#planets">
                    <div className="accordion-body">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta eius placeat non delectus odit libero illo quis minima molestiae.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-target="#mars" data-bs-toggle="collapse">Mars</button>
                  </h2>
                  <div className="accordion-collapse collapse" id="mars" data-bs-parent="#planets">
                    <div className="accordion-body">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta eius placeat non delectus odit libero illo quis minima molestiae.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-target="#jupiter" data-bs-toggle="collapse">Jupiter</button>
                  </h2>
                  <div className="accordion-collapse collapse" id="jupiter" data-bs-parent="#planets">
                    <div className="accordion-body">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta eius placeat non delectus odit libero illo quis minima molestiae.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section className="row mt-5">
            <div className="col-12 col-lg-6">

              <form action="#" className="text-center">
                <h2>Formulario</h2>

                <div className="form-floating mt-3">
                  <input type="text" id="name" className="form-control" placeholder=""/>
                  <label htmlFor="name" className="form-label">Name</label>
                </div>

                <div className="form-floating mt-3">
                  <input type="email" id="email" className="form-control" placeholder=""/>
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
              </form>

              <div className="form-floating mt-3">
                  <input type="password" id="password" className="form-control" placeholder=""/>
                  <label htmlFor="password" className="form-label">Password</label>
              </div>

              <div className="form-floating mt-3">
                  <textarea id="message" className="form-control" placeholder=""></textarea>
                  <label htmlFor="message" className="form-label">Message</label>
              </div>

              <div className="form-check form-switch d-flex justify-content-center mt-3">
                <input type="checkbox" id="terms" className="form-check-input" />
                <label htmlFor="terms">Accept terms and conditions</label>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary col-5" type="submit">
                  Send data
                </button>
              </div>

            </div>

            <div className="col-12 col-lg-6">
                <div className="d-flex flex-column gap-3 align-items-center mt-4">
                <div>
                <button className="btn btn-outline-primary" type="button" data-bs-target="#extra" data-bs-toggle="collapse">Show Extra info</button>
                </div>
                <div className="collapse p-2" id="extra">
                    <p className="lead">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sit velit molestiae, repudiandae, iure blanditiis nam assumenda aut reiciendis mollitia totam sunt dolore, tempora labore officiis nisi. Incidunt quos, soluta, perferendis nulla aut quam assumenda quibusdam illum saepe repellat cumque necessitatibus animi reprehenderit fugiat voluptatem minus ipsam veniam maiores iste.
                    </p>

                    <button className="btn btn-outline-info" type="button" data-bs-target="#mod" data-bs-toggle="modal">
                      Show Modal Info
                    </button>

                    <div className="modal fade" id="mod" tabindex="-1" data-bs-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                          <div className="modal-header">
                            <h2>Titulo Modal</h2>
                            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                          </div>

                          <div className="modal-body">
                            <p className="lead p-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati sit similique pariatur doloremque eligendi, cum unde, numquam, aspernatur ullam tempora rerum iste quas hic sint velit voluptates porro tempore voluptatibus quisquam consectetur minus? Voluptas dicta accusantium neque non voluptates?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
            </div>

          </section>

        </div>

        <footer className="bg-dark mt-5">
          <div className="container">
            <div className="row">
              <div className="col">

                <p className="lead text-light text-center">Derechos reservados - 2023</p>

              </div>
            </div>
          </div>
        </footer>
        
    </>
  );
}

export default App;
