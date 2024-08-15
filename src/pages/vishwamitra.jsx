import React from "react";
import SEO from "../common/seo";
import Vishwamitra from "../components/vishwamitra";
import Wrapper from "../layout/wrapper";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Setoo - Vishwamitra"} />
            <Vishwamitra />
        </Wrapper>
    );
};

export default index;