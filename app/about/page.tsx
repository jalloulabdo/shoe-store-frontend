import Link from "next/link";
export default function About() {
  return (
    <>
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{ background: "url(/images/hero-image.jpg) no-repeat" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">About us</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">About</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="padding-large">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-holder">
                <img
                  src="images/single-image1.jpg"
                  alt="single"
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="detail">
                <div className="display-header">
                  <h2 className="section-title">
                    How was Ultras Store started?
                  </h2>
                  <p>
                    Welcome to Ultras Sport Shoes, your ultimate destination for
                    premium sports footwear! At Ultras, we are passionate about
                    providing you with the latest and greatest in athletic
                    footwear, ensuring that you not only meet but exceed your
                    performance goals.
                    <br />
                    At Ultras, our mission is clear – to empower individuals to
                    achieve their best through high-quality sports shoes. We
                    understand the pivotal role that the right footwear plays in
                    enhancing your athletic performance, and we are dedicated to
                    curating a collection that caters to your unique needs and
                    preferences..{" "}
                  </p>
                  <div className="btn-wrap">
                    <Link
                      href="/"
                      className="btn btn-dark btn-medium d-flex align-items-center"
                    >
                      Shop our store
                      <i className="icon icon-arrow-io" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
