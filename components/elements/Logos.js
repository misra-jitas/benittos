// components/elements/Logos.js
import React from 'react';
import Link from 'next/link';

const Logos = () => {
  return (
    <section className="section-box overflow-visible mt-70">
      <div className="container">
        <h2 className="text-heading-3 text-center color-gray-900 mb-60">Colaboradores del Ecosistema Nativo de la Nube</h2>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-partners">
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/aws3.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/ibm2.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/azure2.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/google2.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/kubernetes.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/github.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/gitlab.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/openshift.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/jenkins.svg" /></a></Link>
              </li>
              <li>
                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow"><img alt="Sube.Cloud" src="/assets/imgs/slider/logo/docker.svg" /></a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
