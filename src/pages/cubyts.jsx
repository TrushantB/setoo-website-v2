import React from "react";
import SEO from "../common/seo";
import Cubyts from "../components/cubyts";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Setoo - Cubyts"} />
            <Cubyts />
        </Wrapper>
    );
};

export default index;