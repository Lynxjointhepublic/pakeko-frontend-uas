import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({resume}) {
  console.log(resume.database)
  return (
    <>
    <div>
  {/* Header Start */}
  <div className="container-fluid my-6 mt-0 mb-20" id="home">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
          <h3 className="Subs">{resume.database[0].judul}</h3>
          <h1 className="Nama">{resume.database[0].nama}</h1>
          <p className="Des">{resume.database[0].desc}</p>
        </div>
        <div className="col-lg-6">
          <img className="gambar" src="img/image1.jpg" alt />
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Expertise Start */}
  <div className="container-xxl py-10 pb-10" id="skill">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="display-5 mb-1">{resume.database[1].judul}</h1>
          <p className="mb-4">{resume.database[1].desc}</p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{resume.database[1].skill[0].type}</h6>
                  <h6 className="font-weight-bold">95%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{resume.database[1].skill[1].type}</h6>
                  <h6 className="font-weight-bold">85%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{resume.database[1].skill[2].type}</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{resume.database[1].skill[3].type}</h6>
                  <h6 className="font-weight-bold">90%</h6>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Expertise End */}
  {/* Projects Start */}
  <div className="container-xxl py-6 pt-5" id="project">
    <div className="container">
      <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-6">
          <h1 className="display-5 mb-0">{resume.database[2].judul}</h1>
        </div>
      </div>
      <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-4 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src={resume.database[2].items[0].img} alt />
            <div className="portfolio-btn">
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[0].img} data-lightbox="portfolio"><i className= {resume.database[2].items[0].icon[0].class} /></a>
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[0].icon[0].url} ><i className= {resume.database[2].items[0].icon[1].class} /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src={resume.database[2].items[1].img} alt />
            <div className="portfolio-btn">
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[1].img} data-lightbox="portfolio"><i className= {resume.database[2].items[1].icon[0].class} /></a>
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[1].icon[0].url}><i className={resume.database[2].items[1].icon[1].class} /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src={resume.database[2].items[2].img} alt />
            <div className="portfolio-btn">
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[2].img} data-lightbox="portfolio"><i className= {resume.database[2].items[2].icon[0].class}/></a>
              <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href= {resume.database[2].items[2].icon[0].url}><i className= {resume.database[2].items[2].icon[1].class}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  <div className="container-xxl pb-5" id="contact">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="mb-2">{resume.database[3].items[0].judul}</p>
          <h3 className="fw-bold">{resume.database[3].items[0].desc}</h3>
          <hr className="w-100" />
          <p className="mb-2">Follow me:</p>
          <div className="d-flex pt-2">
            <a className="btn btn-square btn-primary me-2" href={resume.database[3].items[0].instagram}><i className="fab fa-instagram" /></a>
            <a className="btn btn-square btn-primary me-2" href={resume.database[3].items[0].facebook}><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-square btn-primary me-2" href={resume.database[3].items[0].youtube}><i className="fab fa-youtube" /></a>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright Start */}
  <div className="container-fluid bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="border-bottom text-secondary" href="#">{resume.database[4].judul[0].text}</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
          <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
    </>
  )
}

export async function getServerSideProps(context){
  const linkdb = 'http://localhost:5000/';
  const respondb = await fetch(linkdb);
  const datajson = await respondb.json();
  
  return{
    props : {
      resume : datajson
    }
  }
}