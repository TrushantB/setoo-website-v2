import React from "react";
import SEO from "../common/seo";
import Kerf from "../components/kerf";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Setoo - Cubyts"} />
            <Kerf />
        </Wrapper>
    );
};

export default index;