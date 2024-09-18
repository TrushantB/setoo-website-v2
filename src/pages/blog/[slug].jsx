import { getPostData, getPostSlugs } from '../../lib/posts';
import Head from 'next/head';
import Wrapper from '@/layout/wrapper';
import BlogHeader from '@/common/blog-header';
import imgShape1 from '../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png';
import imgShape2 from '../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png';
import imgAuthor from '../../../public/assets/img/blog/blog-avata-1.png';
import HeaderFour from '@/layout/headers/header';
import FooterFour from '@/layout/footers/footer-4';
import Image from 'next/image';
import SocialLinks from '@/common/social-links';

export async function getStaticPaths() {
    const slugs = getPostSlugs(); // Get all post slugs
    const paths = slugs.map(slug => ({
        params: { slug }, // Create path for each post
    }));

    return { paths, fallback: false }; // No fallback, only paths generated at build time
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug); // Fetch post data at build time
    return { props: { postData } }; // Pass data to the page as props
}

export default function Post({ postData }) {
    // console.log('Post Data:', postData); // Check data in the browser console
    const { title, description, openGraph, contentHtml, schema, author_name, author_info, sub_title, hero_image, tocHtml } = postData;
    // Prepare schema with hero image and other details
    const schemaWithHeroImage = {
        ...schema.article,
        image: hero_image || schema.image?.url,
        breadcrumb: schema.breadcrumb,
        organization: schema.organization,
        ...(schema.faq && { faq: schema.faq }) // Add FAQ schema only if present
    };

    // Pass the extracted data to the BlogHeader component
    const breadcrumbContent = {
        sub_title: sub_title || 'Default Subtitle',
        title: title || 'Default Title',
        author_name: author_name || 'Unknown Author',
        author_info: author_info || 'No Author Info'
    };

    return (
        <Wrapper>
            <Head>
                <title>{openGraph?.title || title}</title>
                <meta name="description" content={openGraph?.description || description} />
                <meta property="og:type" content={openGraph?.type || 'article'} />
                <meta property="og:url" content={openGraph?.url} />
                <meta property="og:image" content={openGraph?.image} />
                <meta property="og:site_name" content={openGraph?.site_name} />
                <meta property="og:title" content={openGraph?.title || title} />
                <meta property="og:description" content={openGraph?.description || description} />
                {/* Add JSON-LD schema markup */}
                {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
                {schemaWithHeroImage && <script type="application/ld+json">{JSON.stringify(schemaWithHeroImage)}</script>}
            </Head>
            <HeaderFour />
            <BlogHeader
                breadcrumbContent={breadcrumbContent}
                authorImage={imgAuthor}
                shape1={imgShape1}
                shape2={imgShape2}
            />
            <article className='container postbox__area'>
                <div className='pb-100'>
                    <div className='blog-details-img-area mb-80'>
                        <div className='blog-details-big-img z-index-2'>
                            {hero_image && (
                                <Image
                                    src={hero_image}
                                    alt="Hero Image"
                                    className="article-hero-image"
                                    width={1200}
                                    height={675}
                                />
                            )}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 align-self-start sticky-lg-top'>
                            <div className='blog__wrapper'>
                                {tocHtml && (
                                    <div className="table-of-contents mb-30">
                                        <div dangerouslySetInnerHTML={{ __html: tocHtml }} />
                                    </div>
                                )}
                                <SocialLinks url={typeof window !== 'undefined' ? window.location.href : ''} />
                            </div>
                        </div>
                        <div className='col-xxl-8 col-xl-8 col-lg-8'>
                            <div className='postbox__details-wrapper pr-20'>
                                {/* <h1>{title}</h1> */}
                                
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                            </div>
                        </div>                        
                    </div>
                </div>
            </article>
            <FooterFour />
        </Wrapper>
    );
}
