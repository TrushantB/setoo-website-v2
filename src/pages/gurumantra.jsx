import React from "react";
import SEO from "../common/seo";
import Gurumantra from "../components/gurumantra";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Setoo - Gurumantra"} />
            <Gurumantra />
        </Wrapper>
    );
};

export default index;