import BreadcrumbTwo from '@/common/breadcrumbs/breadcrumb-2';
import Header from "@/layout/headers/header";
import React from 'react'
import EventLising from './event';
import CtaArea from '../about/cta-area';
import FooterFour from '@/layout/footers/footer-4';

const Events = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title={"Our Events"} innertitle={"Events"} />
        <EventLising />
        {/* <Portfolio /> */}
        <CtaArea />
      </main>
      <FooterFour />
    </>
  );
}

export default Events